import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://Localhost:5000";

  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  const userInitial = "";
  const [user, setUser] = useState(userInitial)

  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      },
    });
    const Json = await response.json();
    // console.log(Json);
    setNotes(Json);
  };

  const getUser = async () => {
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      },
    });
    const Json = await response.json();
    // console.log(Json);
    setUser(Json);
  };

  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const Json = await response.json();
    console.log(Json);

    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const elements = newNotes[index];

      if (elements._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      } 
    }
    setNotes(newNotes);
  };

  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      },
    });
    const Json = await response.json();
    console.log(Json);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, user, addNote, editNote, deleteNote, getNotes, getUser }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
