import Flashcards from "./Flashcards";
import Logo from "./Logo";
import cards from "./Cards";
import { useState } from "react";

let questionsData = cards.map((value) => ({
  ...value,
  virado: false,
}));

export default function Container() {
  const [questions, setQuestions] = useState(questionsData);
  function cardVirado(cardIndex) {
    const newQuestions = questions.map((value, index) => {
      if (index === cardIndex) {
        return {
          ...value,
          virado: true,
        };
      }
      return {
        ...value,
        virado: false,
      };
    });
    setQuestions([...newQuestions]);
  }

  const [respondidos, setRespondidos] = useState([]);
  function zapCard(index, status) {
    console.log("chamou", index);
    setRespondidos([...respondidos, status]);
  }
  return (
    <div>
      <Logo />
      <Flashcards
        zapCard={zapCard}
        questions={questions}
        respondidos={respondidos}
        cardVirado={cardVirado}
      />
    </div>
  );
}
