import styled from "styled-components";

export default function Footer({ children, questions, respondidos }) {
  return (
    <FooterContainer>
      {respondidos.length} / {questions.length} Concluídos
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;
