import defaultAvatar from '../../assets/default_avatar.jpg'

export default function Character(props) {
    // Desestrutura as props recebidas
    const { characterDetails, setIsModalOpen, setCurrentCharacter } = props;
    const { name, image } = characterDetails;
    // Define o avatar: usa a imagem do personagem, ou a imagem padrão se não existir
    const avatar = image ? image : defaultAvatar

    const openModal = () => {
        setIsModalOpen(true);
        setCurrentCharacter(characterDetails)
    }

    return (
        <div className="col-md-3 mb-3" onClick={openModal}>
            <div className="card">
                <a href="#">
                    <img src={avatar} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    </div>
                </a>
            </div>
        </div>
    );
}