import styled from "styled-components";
import setinhaPlay from "../assets/img/seta_play.png";
export default function Flashcard({ index }) {
  return (
    <PerguntaFechada>
      <p>{`Pergunta ${index + 1}`}</p>
      <img src={setinhaPlay} alt="" />
    </PerguntaFechada>
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
