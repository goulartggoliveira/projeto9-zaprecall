import styled from "styled-components";
import cards from "./Cards.jsx";
import Flashcard from "./Flashcard";
console.log(cards);

export default function Flashcards(props) {
  return (
    <div>
      {cards.map((value, index) => (
        <Flashcard key={index} index={index} question={value.question} />
      ))}
    </div>
  );
}
