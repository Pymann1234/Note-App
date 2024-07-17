import React from 'react';

const Note = ({ note, index, deleteNote }) => {
  return (
    <div className="note">
      <span>{note.text}</span>
      <button onClick={() => deleteNote(index)}>Delete</button> 
    </div>
  );
};

export default Note;
