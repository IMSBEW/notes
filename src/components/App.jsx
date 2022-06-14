import { useState } from "react"
import FormCreateNote from "./formCreateNote/FormCreateNote"
import NoteContainer from "./noteContainer/NoteContainer"
import EditModal from "./editModal/EditModal";

function App() {
    const [notes, setNotes] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    const [selectedNote, setSelectedNote] = useState(null)

    const addNote = (note) => {
        setNotes(notes => ([...notes, note]))
    }

    const deleteNote = (id) => {
        setNotes(notes => notes.filter(note => note.id !== id))
    }

    const onEditNoteHandler = (noteID) => {
        setIsVisible(true)
        setSelectedNote(notes.find(note => note.id === noteID))
    }

    const editNote = (note) => {
        setNotes(notes => notes.map(n => n.id === note.id ? note : n))
        setIsVisible(false)
    }

    const closeModalHandler = () => {
        setIsVisible(false)
    }

    return (
        <div className="wrapper">
            <FormCreateNote onSave={addNote} />
            <NoteContainer notes={notes} onDelete={deleteNote} onEdit={onEditNoteHandler} />
            <EditModal
                isVisible={isVisible}
                onReject={closeModalHandler}
                selectedNote={selectedNote}
                onSubmit={editNote} />
        </div>
    )
}

export default App
