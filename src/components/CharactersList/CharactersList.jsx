import { useEffect, useState } from "react";
import Character from "./Character";
import './CharacterList.css'
import CharacterDetailsModal from "../CharacterDetailsModal/CharacterDetailsModal";

export default function CharactersList({ }) {
    // Estado para armazenar os personagens
    const [characters, setCharacters] = useState([]);
    // Estado para controlar a visibilidade do modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Estado para a personagem atualmente selecionada
    const [currentCharacter, setCurrentCharacter] = useState(null);

    useEffect(() => {
        const url = "https://hp-api.onrender.com/api/characters";

        fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {
            setCharacters(data)
        }).catch(function (error) {
            console.log(error);
        });
    }, []); // Executa o efeito apenas uma vez
    return (
        <div className="character-page-container ">
            <div className="container mt-5">
                <div className="row mt-3">
                    {characters.map((character) => (
                        <Character
                            key={character.id}
                            characterDetails={character}
                            setIsModalOpen={setIsModalOpen}
                            setCurrentCharacter={setCurrentCharacter}
                        />
                    ))}
                </div>
            </div>
            {/* Renderiza o modal de detalhes se estiver aberto e houver uma personagem selecionada */}
            {isModalOpen && currentCharacter && (
                <CharacterDetailsModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    currentCharacter={currentCharacter}
                    setCurrentCharacter={setCurrentCharacter}
                />
            )}
        </div>
    );
}