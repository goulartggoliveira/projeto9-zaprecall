import styled from "styled-components";
import Icones from "./Icones";
import { useState } from "react";
import cards from "./Cards";

function CardPergunta({ question, answer, index, erro, zapCard }) {
  const [virarCarta, setVirarCarta] = useState(false);

  return (
    <PerguntaAberta>
      <>{!virarCarta ? question : answer}</>
      {!virarCarta ? (
        <div onClick={() => setVirarCarta(true)}>
          <Icones type="virar" />
        </div>
      ) : (
        <ContainerBotoes>
          <BotoesDoContainer onClick={() => zapCard("erro")}>
            Não lembrei
          </BotoesDoContainer>
          <BotoesDoContainer>Qause lembrei</BotoesDoContainer>
          <BotoesDoContainer>Zap!</BotoesDoContainer>
        </ContainerBotoes>
      )}
    </PerguntaAberta>
  );
}

export default function Flashcard({
  index,
  question,
  virado,
  answer,
  zapCard,
}) {
  const [Clicado, setClicado] = useState(virado);

  return (
    <>
      {!Clicado ? (
        <PerguntaFechada onClick={() => setClicado(true)}>
          <p>{`Pergunta ${index + 1}`}</p>
          <Icones type="play" />
        </PerguntaFechada>
      ) : (
        <CardPergunta question={question} answer={answer} zapCard={zapCard} />
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
const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
`;
const BotoesDoContainer = styled.button`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: blue;
  border-radius: 5px;
  border: 1px solid blue;
  padding: 5px;
  cursor: pointer;
`;
