import { useState } from "react";
import "./Hogwarts.css";
import letterImage from '../../assets/carta.jpg'
import Modal from 'react-bootstrap/Modal';

const Hogwarts = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const onOpenModal = () => setModalIsOpen(true);
    const onCloseModal = () => setModalIsOpen(false);

    return (
        <>
            <div className="hogwarts-page-container">
                <button className="letter-button" onClick={onOpenModal}>Welcome to the Wizarding World</button>
            </div>

            <Modal show={modalIsOpen} onHide={onCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Hogwarts Acceptance Letter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className="letter-image" src={letterImage} />
                </Modal.Body>
            </Modal>
        </>

    );
};

export default Hogwarts;