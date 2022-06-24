import React from "react";

const Note = (props) => (
    <li
        key={props.note.id}
        className="note"
        onClick={() => props.selectHandler(props.note.id)}
    >
        <h5>{props.note.body.split("\n")[0]}</h5>
        <button
            className="delete-button"
            onClick={(event) => props.deleteHandler(event, props.note.id)}
        >
            <i className="fa-solid fa-trash-can"></i>
        </button>
    </li>
)

const Sidebar = (props) => {

    const SidebarHeader = (props) => (
        <div className="sidebar__header">
            <h1 className="sidebar__title">Notes</h1>
            <button
                className="add-note-button"
                onClick={props.addNote}
            >+</button>
        </div>
    )

    const notes = props.notes.map(note => (
        <Note
            note={note}
            selectHandler={props.selectNoteHandler}
            deleteHandler={props.deleteNoteHandler}
        />
    ))

    return (
        <nav className="sidebar">
            <SidebarHeader addNote={props.createNoteHandler} />
            <ul className="notes">{notes}</ul>
        </nav>
    )
}

export default Sidebar;