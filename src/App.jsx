import { useEffect, useState } from "react";

import Hogwarts from "./components/Hogwarts/Hogwarts";
import Navbar from "./components/Navbar/Navbar";
import SpellsList from "./components/SpellsList/SpellsList";
import CharactersList from "./components/CharactersList/CharactersList";
import Loading from "./components/Loading/Loading";


function App() {
  // Estado que controla qual secção está ativa (inicia com "hogwarts")
  const [activeSection, setActiveSection] = useState("hogwarts");
  // Estado que indica se está a carregar algo (loading)
  const [isLoading, setIsLoading] = useState(false);


  // Este efeito é executado sempre que o activeSection muda
  useEffect(() => {
    // Quando o activeSection for "spells" ou "characters", o estado de loading passa a true
    if (activeSection === 'spells' || activeSection === 'characters') {
      setIsLoading(true);
    }
  }, [activeSection]);

  //Se o estado de loading for true, mostramos o componente Loading
  if (isLoading) {
    return <Loading isLoading={isLoading} setIsLoading={setIsLoading} />
  }

  return (
    <>
      {/* O componente Navbar é renderizado e recebe a função setActiveSection como props
          para atualizar a secção ativa */}
      <Navbar setActiveSection={setActiveSection} />
      <>

        {/* Renderizamos os componentes com base na secção ativa */}
        {activeSection === "hogwarts" ? <Hogwarts /> : null}
        {activeSection === "spells" ? <SpellsList /> : null}
        {activeSection === "characters" ? <CharactersList /> : null}
      </>
    </>
  );
}

export default App;