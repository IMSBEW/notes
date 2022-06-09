import './note.scss'

const Note = () => {
   return (
      <li data-note-id="1" className="note__content">
         <div className="note__body">
            <p className="note__title">Работа</p>
            <p className="note__text">Нужно бы найти работу</p>
            <p className="note__date">11:31:17</p>
         </div>
         <div className="note__buttons">
            <button className="note__btn btn-delete">Удалить</button>
            <button className="note__btn btn-edit" data-id="1">Изменить</button>
         </div>
      </li>
   )
}

export default Note