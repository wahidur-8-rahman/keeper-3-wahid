import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArr, setNotesArr] = useState([]);

  function addNote(note) {
    setNotesArr((prev) => {
      return [...prev, note];
    });
  }

  function delNote(id) {
    setNotesArr((prev) => {
      return prev.filter((x, y) => {
        //x,yis auto mapped to item , index of item
        return id != y;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAddNote={addNote} />
      {notesArr.map((x, y) => {
        //x, y auto mapped to item, index of item
        return (
          <Note title={x.title} callBack={delNote} id={y} content={x.content} />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
