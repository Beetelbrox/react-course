import React from "react"
import JournalEntry from "./components/JournalEntry";
import journalEntryData from "./journalEntryData"

const App = () => {
  const journalEntries = journalEntryData.map(
    item => <JournalEntry key={item.id} {...item} />
  )
  return (
    <div className="app">
      <header className="header">
        <p><i class="fa-solid fa-earth-europe" /> my travel journal</p>
      </header>
      <main>
        {journalEntries}
      </main>
    </div>
  );
}

export default App;
