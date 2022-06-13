import './note.scss'

const Note = ({ notes, onDeleteNotes }) => {
   const deleteNotes = (note) => {
      onDeleteNotes(note)
   }
   return (
      <>
         {notes.map((note, index) =>
            <li key={index} data-note-id="1" className="note__content">
               <div className="note__body">
                  <p className="note__text">{note}</p>
                  <p className="note__date">11:31:17</p>
               </div>
               <div className="note__buttons">
                  <button onClick={() => { deleteNotes(note) }} className="note__btn btn-delete">Удалить</button>
                  <button className="note__btn btn-edit" data-id="1">Изменить</button>
               </div>
            </li>
         )}
      </>
   )
}

export default Note