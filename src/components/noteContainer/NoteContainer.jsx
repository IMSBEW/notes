import Note from '../note/Note'
import './noteContainer.scss'

const NoteContainer = ({ notes, onDelete, onEdit }) => {

    return (
        <div className="note-container">
            <div className="container">
                <div className="note-container__wrapper note-container__wrapper-active">
                    <h3 className="note-container__title">Список заметок</h3>
                    {!notes[0] ? <p className=" note-container__message">Заметок нет</p> : null}
                    <div className="note-container__select">
                    </div>
                    <ul className="note-container__list-active">
                        <ul className="note-container__list">
                            {notes.map(note => {
                                return (<Note note={note} key={note.id} onDelete={onDelete} onEdit={onEdit} />)
                            })}
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NoteContainer
