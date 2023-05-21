import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = (props) => {
  const context = useContext(NoteContext);
  // eslint-disable-next-line
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Addded Succesfully","success")
  };
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Add a Note</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Add Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          minLength={3}
          required
          value={note.title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Add Description
        </label>
        <textarea
          type="text"
          className="form-control"
          id="description"
          name="description"
          rows="5"
          onChange={handleChange}
          minLength={3}
          required
          value={note.description}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Add Tag
        </label>
        <input
          type="text"
          className="form-control"
          id="tag"
          name="tag"
          onChange={handleChange}
          value={note.tag}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary shadow"
        onClick={handleClick}
        disabled={note.title.length < 3 || note.description.length < 3}
      >
        Add My Note
      </button>
    </>
  );
};

export default AddNote;
