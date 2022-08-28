import { useState } from "react";
import Header from "./components/Header";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";
import NotesHolder from "./components/NotesHolder";

function App() {
  const [notes, setNotes] = useState([]);
  const addNotes = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };
  const removeNotes = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => index !== id );
    });
  }
  return (
    <div className="container-fluid">
      <Header />
      <CreateNote addNotes={addNotes} />
      <NotesHolder>
        {notes.map((item, index) => (
          <Notes key={index} data={item} id={index} removeNotes={removeNotes} />
        ))}
      </NotesHolder>
    </div>
  );
}

export default App;
