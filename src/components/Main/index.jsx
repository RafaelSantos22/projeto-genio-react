/* eslint-disable react/no-unescaped-entities */
import "./styles.scss";
import { useState } from "react";
import Lampada from "../../assets/lampada.png";
import Genio from "../../assets/genio.png";

export const Main = () => {
  const [lampada, setLampada] = useState(false);

  const handleClick = () => setLampada(!lampada);

  return (
    <main>
      <h1 className="title">
        "Liberte a magia da programação com a lâmpada de Aladim."
      </h1>

      <img src={lampada ? Genio : Lampada} alt={lampada ? "Gênio" : "Lâmpada"} />

      <button onClick={handleClick}>Clique Aqui</button>
    </main>
  );
};
