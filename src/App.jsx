import React, { useState } from 'react';
import Note from './Note';
import NoteForm from './NoteForm';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    const newNotes = [...notes, { text }];
    setNotes(newNotes);
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <h1>Note Application</h1>
      <NoteForm addNote={addNote} />
      {notes.map((note, index) => (
        <Note key={index} index={index} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
}

export default App;

