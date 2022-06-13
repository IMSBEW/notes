import { useEffect, useState } from 'react'
import './formCreateNote.scss'

// const entryTag = (e) => {
//    console.log(e.target.value)
//    if (e.target.value === '#') {
//       console.log('dfd')
//    }
// }

const FormCreateNote = ({ onUpdateNotes, ddeleteNote }) => {
   const [value, setValue] = useState('')
   const [note, setNote] = useState([])

   console.log(ddeleteNote)

   useEffect(() => {
      onUpdateNotes(note)
   })

   const getValue = (e) => {
      e.preventDefault()

      setValue(e.target.value)

   }


   const clearHandler = () => {
      setNote(note => ([...note, value]))

      onUpdateNotes(note)

      setValue('')
   }

   return (
      <div className="form">
         <div className="container">
            <div className="form__content">
               <h3 className="form__title">Новая заметка</h3>
               <div className="form__body">
                  <div name="addNote" id='form'>
                     <textarea value={value} onChange={getValue} cols="30" rows="5" name="description" className="form__note-description"
                        placeholder="Описание"></textarea>
                     <button onClick={clearHandler} className="form__button">Создать</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FormCreateNote