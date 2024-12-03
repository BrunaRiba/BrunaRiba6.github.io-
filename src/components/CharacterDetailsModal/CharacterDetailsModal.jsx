import Modal from 'react-bootstrap/Modal';
import defaultAvatar from '../../assets/default_avatar.jpg'
import './CharacterDetailsModal.css';

function CharacterDetailsModal({ isModalOpen, setIsModalOpen, currentCharacter, setCurrentCharacter }) {
    // Define o avatar da personagem: usa a imagem fornecida ou a imagem padrão
    const avatar = currentCharacter.image ? currentCharacter.image : defaultAvatar


    const closeModal = () => {
        // Fecha o modal e limpa a personagem atual
        setIsModalOpen(false);
        setCurrentCharacter(null);
    }

    return (
        <div className="character-details">
            <Modal show={isModalOpen} onHide={closeModal}>
                <Modal.Header closeButton />
                <Modal.Body>
                    <img id="details-image" src={avatar} />
                    <h1>{currentCharacter.name ? currentCharacter.name : null}</h1>
                    <p>Actor: {currentCharacter.actor}</p>
                    <p>Alternate Names: {currentCharacter.alternate_names}</p>
                    <p>Species: {currentCharacter.species}</p>
                    <p>Gender: {currentCharacter.gender}</p>
                    <p>Wizard: {currentCharacter.wizard ? 'Yes' : 'No'}</p>
                    <p>Ancestry: {currentCharacter.ancestry}</p>
                    <p>House: {currentCharacter.house}</p>
                    <p>Patronus: {currentCharacter.patronus}</p>
                    <p>Wand: {currentCharacter.wand.core}</p>
                    <p>Alive: {currentCharacter.alive ? 'Yes' : 'No'}</p>

                </Modal.Body>
            </Modal>
        </div>
    );
}

export default CharacterDetailsModal;