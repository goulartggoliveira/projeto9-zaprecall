import Flashcard from "./Flashcard";
import Footer from "./Footer.jsx";

export default function Flashcards({
  questions,
  zapCard,
  respondidos,
  cardVirado,
}) {
  return (
    <div>
      {questions.map((value, index) => (
        <Flashcard
          key={index}
          index={index}
          question={value.question}
          virado={value.virado}
          answer={value.answer}
          zapCard={zapCard}
          cardVirado={cardVirado}
        />
      ))}
      <Footer questions={questions} respondidos={respondidos} />
    </div>
  );
}
