import { useState, useEffect } from "react";
import Header from "./Header";
import Card from "./Card";

const cardImages = [
  { src: "img/angular.png", match: false },
  { src: "img/d3.png", match: false },
  { src: "img/evista.png", match: false },
  { src: "img/jenkins.png", match: false },
  { src: "img/postcss.png", match: false },
  { src: "img/react.png", match: false },
  { src: "img/redux.png", match: false },
  { src: "img/sass.png", match: false },
  { src: "img/ts.png", match: false },
  { src: "img/webpack.png", match: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //setting choices
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //new game, shuffle cards
  const shuffleCards = (deckSize) => {
    const shuffledCards = [
      ...cardImages.slice(0, deckSize),
      ...cardImages.slice(0, deckSize),
    ]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  //on match :
  //iterate through cards
  //set match property true
  useEffect(() => {
    //match beallitasa
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, match: true };
            } else {
              return card;
            }
          });
        });
        reset();
      } else {
        setTimeout(reset, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //2 turns
  const reset = () => {
    setTurns(() => setTurns(turns + 1));
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  return (
    <>
      <div className="App">
        <Header shuffleCards={shuffleCards} />

        <div className="card-grid">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.match}
              disabled={disabled}
            />
          ))}
        </div>
        <h3>Turn: {turns}</h3>
      </div>
    </>
  );
}

export default App;
