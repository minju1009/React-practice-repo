import React, { useState } from 'react';

function CreateArea({ addNote }) {
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({ title: '', content: '' });
  };

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
