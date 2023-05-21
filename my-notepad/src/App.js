import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, Type) => {
    setAlert({
      msg: message,
      type: Type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <BrowserRouter>
      <NoteState>
        <Navbar />

        <Alert alert={alert} />

        <Routes>
          <Route path="/" element={<Home showAlert={showAlert} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login showAlert={showAlert} />} />
          <Route path="/signup" element={<SignUp showAlert={showAlert} />} />
        </Routes>
      </NoteState>
      {/* </> */}
    </BrowserRouter>
  );
}

export default App;
