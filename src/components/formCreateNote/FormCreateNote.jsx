import { useEffect, useState } from 'react'
import './formCreateNote.scss'

// const entryTag = (e) => {
//    console.log(e.target.value)
//    if (e.target.value === '#') {
//       console.log('dfd')
//    }
// }

const FormCreateNote = ({ onSave, isEditingExisting = false, selectedNote, onReject }) => {
    const [value, setValue] = useState('')
    const [tag, setTag] = useState([])
    const changeHandler = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        if (isEditingExisting) {
            setValue(selectedNote.description)
        }
    }, [selectedNote])

    const createTag = () => {
        const tagText = value.match(/(#\w+)/g, '$1').join(', ')
        // console.log(tagText)
        if (tagText) {
            setTag(tag => [...tag, tagText])
        }
    }


    console.log(tag)
    const createHandler = () => {
        const description = value.trim()

        // setTag(tag => [...tag, ...)])
        if (!description) return
        const now = new Date();
        const current = now.getHours() + ':' + String(now.getMinutes()).padStart(2, "0")

        console.log()
        const note = {
            id: isEditingExisting ? selectedNote.id : Date.now(),
            description,
            date: current,
            tags: ''
        }

        createTag()
        onSave(note)
        setValue('')
    }
    console.log(tag)

    return (
        <div className="form">
            <div className="container">
                <div className="form__content">
                    <h3 className="form__title">{
                        isEditingExisting ? 'Редактировать заметку' : 'Создать заметку'
                    }</h3>
                    <div className="form__body">
                        <div name="addNote">
                            <textarea value={value} onChange={changeHandler} cols="30" rows="5" name="description"
                                className="form__note-description"
                                placeholder="Описание" />
                            <button onClick={createHandler} className="form__button">{
                                isEditingExisting ? 'Изменить' : 'Создать'
                            }</button>
                            {isEditingExisting ?
                                <button className='form__button' onClick={onReject}>Cancel</button> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormCreateNote
