import styled from "styled-components";
import GlobalStyle from "../assets/css/GlobalStyle";
import Container from "./Container";

function App() {
  return (
    <ScreenContainer>
      <GlobalStyle />
      <Container />
    </ScreenContainer>
  );
}

export default App;

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
