import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const ExampleNote = (props) => {
  const a = useContext(NoteContext);
  // eslint-disable-next-line
  const { deleteNote } = a;
  const { note, updateNote } = props;

  const handleDeleteClick = (e) => {
    deleteNote(note._id);
    props.showAlert("Deleted Successfully", "success");
  };
  const handleUpdateClick = (e) => {
    updateNote(note);
  };

  return (
    <div className="col">
      <div className="card border-light shadow mb-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div className="d-flex justify-content-end">
            <span
              className="material-symbols-outlined mx-2"
              onClick={handleUpdateClick}
            >
              edit_square
            </span>
            <span
              className="material-symbols-outlined mx-2"
              onClick={handleDeleteClick}
            >
              delete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleNote;
