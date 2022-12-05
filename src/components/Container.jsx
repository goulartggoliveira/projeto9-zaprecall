import Flashcards from "./Flashcards";
import Logo from "./Logo";
import cards from "./Cards";
import { useState } from "react";

let questionsData = cards.map((value) => ({
  ...value,
  virado: false,
  status: "",
}));

export default function Container() {
  const [questions, setQuestions] = useState(questionsData);
  function cardVirado(cardIndex, tap = true, status = "") {
    const newQuestions = questions.map((value, index) => {
      if (index === cardIndex) {
        return {
          ...value,
          virado: tap,
          status,
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
  function zapCard(cardIndex, status) {
    if (respondidos.some((value) => value.index === cardIndex)) {
      return;
    }
    setRespondidos([
      ...respondidos,
      {
        index: cardIndex,
        status,
      },
    ]);
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
