import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
function App() {
    const[notes, displayNotes] = useState([
      {
        title:"Groceries", 
        content:"Buy groceries till the end of the week!"
      },
      {
        title:"Rent", 
        content:"Pay the rent bill!"
      },
      {
        title:"Study for exam", 
        content:"Revise the modules."
      }
    ]);

    function createNote(note) {
        if((note.title !== "") || (note.content !== ""))
          {
            displayNotes((prevNote)=> {
              return(
                [
                  ...prevNote,
                  note
                ]
              );
            });
          }   
    }

    function deleteNote(id) {
        displayNotes((prevNote)=> 
          {
            return prevNote.filter((item, index) => 
              {
                return index !== id;
              });
          });
    }

    return (
    <><Header />
    <CreateArea onCreateNote={createNote}/>
    {notes.map((note,index) =>  
      <Note 
        key = {index}
        id = {index}
        title = {note.title}
        content = {note.content}
        deleteItem = {deleteNote}
      />
      )}
    <Footer /></>);
}

export default App;