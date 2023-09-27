import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const[note, setNote] = useState(
        {
            title:"",
            content:""
        }
        );

    const[isExpanded, setExpanded] = useState(false);

    function saveNote(event) {
        const {name, value} = event.target;
        setNote(prevNote => {
                return (
                { 
                    ...prevNote,
                    [name]:value 
                });
        });
    }

    function addNote(event) {
        event.preventDefault();
        props.onCreateNote(note);
        setNote({title:"", content:""});
      }

    function addAnimation() {
        setExpanded(true);
    }
    
    return (
        <div>
          <form className="create-note">
            { isExpanded && 
                <input
                name="title"
                placeholder="Title"
                onChange={saveNote}
                value={note.title}
                />
            }
            <textarea
                name="content"
                placeholder="Take a note..."
                rows={isExpanded ? 3 : 1}
                onChange={saveNote}
                value= {note.content}
                onClick={addAnimation}
            />
            <Zoom in={isExpanded}>
                <Fab onClick={addNote}>
                    <AddIcon />
                </Fab>
            </Zoom>          
          </form>
        </div>
      );
}
export default CreateArea;