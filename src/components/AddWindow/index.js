import React from 'react'
import Modal from 'react-modal';
import UpdateForm from '../UpdateForm';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const AddWindow = ({ modalIsOpen, closeModal, onSubmit }) => (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
    >
        <UpdateForm onSubmit={onSubmit} cancelForm={closeModal} />
    </Modal>
)

export default AddWindow