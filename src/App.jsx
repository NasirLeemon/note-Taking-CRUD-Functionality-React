import { Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [loaded, setLoaded] = useState(false);
  // const [noteInUpdate, setNoteInUpdate] = useState(false)
  const [editableNote, setEditableNote] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (evt) => {
    setTitle(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (title) {
      const newNote = {
        id: Date.now(),
        title,
        isComplete: false,
        ...notes,
      };

      setNotes([newNote, ...notes]);
      setLoaded(true);
      setTitle("");
    } else {
      console.log("Dumb");
    }
  };

  const deleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  const editNote = (noteId) => {
    const noteToUpdate = notes.find((note) => note.id === noteId);
    setTitle(noteToUpdate.title);
    setEditableNote(noteToUpdate);
    setEditMode(true);
  };

  const updateNote = (evt) => {
    evt.preventDefault();
    const updatedNote = notes.map((note) => {
      if (note.id === editableNote.id) {
        note.title = title;
      }
      return note;
    });
    setNotes(updatedNote);
    setEditableNote(null);
    setEditMode(false);
    setTitle("");
  };

  return (
    <>
      <div className="app text-center">
        <h2>App</h2>
        <form
          action=""
          onSubmit={(evt) => (editMode ? updateNote(evt) : handleSubmit(evt))}
        >
          <input
            type="text"
            name="task"
            value={title}
            onChange={handleChange}
            id="task"
            className="me-3"
          />
          <Button type="submit">{editMode ? "Update" : "Add"}</Button>
        </form>

        <div>
          {notes.map((note) => (
            <div>
              <p>{note?.title}</p>
              <Button onClick={() => editNote(note.id)} className="me-3">
                Edit
              </Button>
              <Button onClick={() => deleteNote(note.id)}>Delete</Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
