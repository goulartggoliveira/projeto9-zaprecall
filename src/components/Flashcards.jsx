import styled from "styled-components";
import cards from "./Cards.jsx";
import Flashcard from "./Flashcard";

const questions = cards.map((value) => ({
  ...value,
  virado: false,
}));

export default function Flashcards(props) {
  return (
    <div>
      {questions.map((value, index) => (
        <Flashcard
          key={index}
          index={index}
          question={value.question}
          virado={value.virado}
          answer={value.answer}
        />
      ))}
    </div>
  );
}
