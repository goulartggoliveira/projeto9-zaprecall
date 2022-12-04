import styled from "styled-components";
import Icones from "./Icones";
import { useState } from "react";

function CardPergunta({ question }) {
  return (
    <PerguntaAberta>
      <>{question}</>
      <Icones type="virar" />
    </PerguntaAberta>
  );
}

export default function Flashcard({ index, question }) {
  const [Clicado, setClicado] = useState(false);

  return (
    <>
      {!Clicado ? (
        <PerguntaFechada onClick={() => setClicado(true)}>
          <p>{`Pergunta ${index + 1}`}</p>
          <Icones type="play" />
        </PerguntaFechada>
      ) : (
        <CardPergunta question={question} />
      )}
    </>
  );
}

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;
const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
