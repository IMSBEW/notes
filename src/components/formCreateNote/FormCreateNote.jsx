import './formCreateNote.scss'

const formCreateNote = () => {
   return (
      <div className="form">
         <div className="container">
            <div className="form__content">
               <h3 className="form__title">Новая заметка</h3>
               <div className="form__body">
                  <form name="addNote">
                     <input type="text" name="title" className="form__task-title" placeholder="Название" />
                     <textarea cols="30" rows="5" name="description" className="form__task-description"
                        placeholder="Описание"></textarea>
                     <button className="form__button">Создать</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default formCreateNote