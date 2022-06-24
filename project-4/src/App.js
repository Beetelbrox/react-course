import * as React from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import "./App.css";
import {nanoid} from "nanoid";

const createNote = () => ({
  id: nanoid(),
  body: "# Type your markdown note's title here"
})

const NoNotesScreen = (props) => (
  <div className="no-notes-screen">
    <h1>Note list is empty</h1>
    <button
      className="no-notes-screen__button add-note-button"
      onClick={props.createNewNoteHandler}>Create Note</button>
  </div>
)

const getStoredNotes = () => JSON.parse(localStorage.getItem("notes"))

const App = () => {
  const [notes, setNotes] = React.useState(() => getStoredNotes() || [])
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  )

  const addNewNote = () => {
    const newNote = createNote()
    setNotes(prev => [newNote, ...prev])
    setCurrentNoteId(newNote.id)
  }

  React.useEffect(
    () => localStorage.setItem("notes", JSON.stringify(notes)),
    [notes]
  )

  const updateNote = text => setNotes(prev => [
    {...getCurrentNote(), body: text},
    ...prev.filter(note => note.id !== currentNoteId)
  ])

  const getCurrentNote = () => notes.find(
    note => note.id === currentNoteId
  )

  const deleteNote = (event, noteId) => {
    event.stopPropagation();
    setNotes(prev => {
      const remainingNotes = prev.filter(note => note.id !== noteId)
      setCurrentNoteId(remainingNotes[0] ? remainingNotes[0].id : "")
      return remainingNotes;
    })
  }

  return (notes.length ?
    <div className="container">
      <Sidebar
        notes={notes}
        createNoteHandler={addNewNote}
        selectNoteHandler={setCurrentNoteId}
        deleteNoteHandler={deleteNote}
      />
      <Editor
        note={getCurrentNote()}
        markdownChangeHandler={updateNote}
      />
    </div> :
    <NoNotesScreen createNewNoteHandler={addNewNote} />
  )
}

export default App;
