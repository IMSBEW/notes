import { useLayoutEffect, useRef } from 'react';

import './note.scss'


const Note = ({ note, onDelete, onEdit }) => {
    const refText = useRef()

    useLayoutEffect(() => {
        const description = note.description.replace(/(#\w+)/g, '<span class="form__hashtag">$1</span>')
        if (refText.current) {
            refText.current.innerHTML = description
        }
    }, [note])

    return (
        <li className="note__content">
            <div className="note__body">
                <p ref={refText} className="note__text"></p>
                <p className="note__date">{note.date}</p>
            </div>
            <div className="note__buttons">
                <button onClick={() => {
                    onDelete(note.id)
                }} className="note__btn btn-delete">Удалить
                </button>
                <button onClick={() => { onEdit(note.id) }} className="note__btn btn-edit">Изменить</button>
            </div>
        </li>
    )
}



export default Note
