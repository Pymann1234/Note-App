import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addNote(text);
    setText('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a note..."
        value={text}
        className='input-note'
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className='btn-submit'>Add Note</button>
    </form>
  );
};

export default NoteForm;
