import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/NoteContext";
import ExampleNote from "./ExampleNote";
import AddNote from "./AddNote";

const Notes = (props) => {
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  let navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }
    else{
      navigate("/login");
      props.showAlert("Please Login or SignUp !", "warning");
    }
    // eslint-disable-next-line
  }, []);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const ref = useRef(null);
  const refClose = useRef(null);

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    // console.log("updating note", note);
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Updated Successfully", "success");
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />

      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Add Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etitle"
                  name="etitle"
                  value={note.etitle}
                  placeholder="Title"
                  onChange={handleChange}
                  minLength={3}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Add Description
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="edescription"
                  name="edescription"
                  value={note.edescription}
                  rows="3"
                  onChange={handleChange}
                  minLength={3}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Add Tag
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etag"
                  name="etag"
                  value={note.etag}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {notes.length === 0 && "No Notes to display. Please add a Note."}
          {notes.map((notes) => {
            return (
              <ExampleNote
                key={notes._id}
                updateNote={updateNote}
                note={notes}
                showAlert={props.showAlert}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;