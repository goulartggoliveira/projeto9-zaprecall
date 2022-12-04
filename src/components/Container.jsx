import Flashcards from "./Flashcards";
import Footer from "./Footer";
import Logo from "./Logo";
import styled from "styled-components";
import cards from "./Cards";
import { useState } from "react";
const questions = cards.map((value) => ({
  ...value,
  virado: false,
}));

export default function Container() {
  const [respondidos, setRespondidos] = useState([]);
  function zapCard(status) {
    console.log("chamou");
    setRespondidos([...respondidos, status]);
  }
  return (
    <div>
      <Logo />
      <Flashcards
        zapCard={zapCard}
        questions={questions}
        respondidos={respondidos}
      />
    </div>
  );
}
