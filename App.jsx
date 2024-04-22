import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {


  const [notes,SetNotes]=useState([]);


  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }
  
  return (
    <div>
      <Header />
      <CreateArea 
      onAdd={addNote}/>

{notes.map(noteItem => (
  <Note

    title={noteItem.title}
    content={noteItem.content}
  />
))}

   
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}


export default App;
