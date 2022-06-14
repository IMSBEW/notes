import React from 'react';
import './editModal.scss'
import FormCreateNote from "../formCreateNote/FormCreateNote";

const EditModal = ({ isVisible, onSubmit, onReject, selectedNote }) => {
    if (!isVisible) return null;

    const closeModal = (event) => {
        if (event.target.className === 'modal') {
            onReject()
        }
    }

    return (
        <div onClick={closeModal} className="modal">
            <div className="modal__content">
                <FormCreateNote
                    onSave={onSubmit}
                    isEditingExisting={true}
                    selectedNote={selectedNote}
                    onReject={onReject}
                />
            </div>
        </div>
    );
};

export default EditModal;
