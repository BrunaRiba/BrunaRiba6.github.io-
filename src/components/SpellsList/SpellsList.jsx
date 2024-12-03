import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import './SpellsList.css'

function SpellsList() {
    // Define o estado inicial da lista de feitiços como um array vazio
    const [spells, setSpells] = useState([]);
    const url = "https://hp-api.onrender.com/api/spells";

    // useEffect para procurar os dados da API 
    useEffect(() => {
        fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {
            setSpells(data)
        }).catch(function (error) {
            console.log(error);
        });
    }, []); // O array vazio garante que o efeito é executado apenas uma vez

    //tabela 
    return (
        <div id="spells-list-container">
            <h2>Well Well Well, it's leviosa!</h2>
            <div id="spells-list">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Spell name</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody id="spells-table">
                        {spells.map((spell, index) => (
                            <tr key={spell.id} className="magic-effect">
                                <th scope="row">{index + 1}</th>
                                <td>{spell.name}</td>
                                <td>{spell.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default SpellsList;