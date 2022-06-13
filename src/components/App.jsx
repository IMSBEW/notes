import { useEffect, useState } from "react"
import FormCreateNote from "./formCreateNote/FormCreateNote"
import NoteContainer from "./noteContainer/NoteContainer"

function App() {
   const [notes, setNotes] = useState([])
   const [deleteNote, setDeleteNote] = useState('')

   useEffect(() => {

   }, [])

   const getNote = (note) => {
      setNotes(note)
   }

   const getDeleteNote = (note) => {
      setDeleteNote(note)
   }


   return (
      <div className="wrapper">
         <FormCreateNote onUpdateNotes={getNote} ddeleteNote={deleteNote} />
         <NoteContainer notesArr={notes} transferDeleteNote={getDeleteNote} />
      </div>
   )
}

export default App
