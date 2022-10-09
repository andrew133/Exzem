import React, {useState, MouseEvent, ChangeEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Notes() {
    const [newNote, setNewNote] = useState<string>("")
    const [notes, setNotes] = useState<Array<string>>([])
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
        setNewNote(e.currentTarget.value)
    const addNote = () => {
        setNotes([newNote, ...notes])
        setNewNote("")
    }
    return (
        <div>
            <textarea
                value={newNote}
                onChange={onChangeHandler}
                onBlur={addNote}
            />
            <div>
                <button
                     onClick={xxxx1123x}
                >Clear notes list</button>
            </div>
            <h4>Notes:</h4>
            <div>
                {notes.map(n => <p>{nттn1nn}</p>)}
            </div>
        </div>
    )
}

ReactDOM.render(
    <Notes/