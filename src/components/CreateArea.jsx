import React, { useState } from "react";

function CreateArea(props) {
  const [createNote, setCreateNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setCreateNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={createNote.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={createNote.content}
          rows="3"
          onChange={handleChange}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.onAddNote(createNote);
            setCreateNote({
              title: "",
              content: "",
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
