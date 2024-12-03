import { useState } from "react";
import "./Hogwarts.css";
import letterImage from '../../assets/carta.jpg'
import Modal from 'react-bootstrap/Modal';

const Hogwarts = () => {
    // Define o estado para controlar a visibilidade do modal
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const onOpenModal = () => setModalIsOpen(true);
    const onCloseModal = () => setModalIsOpen(false);

    return (
        <>
            <div className="hogwarts-page-container">
                {/* Botão que abre o modal ao ser clicado */}
                <button className="letter-button" onClick={onOpenModal}>Welcome to the Wizarding World</button>
            </div>

            {/* Modal que mostra a carta de aceitação de Hogwarts */}
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