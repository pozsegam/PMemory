import { useState, useEffect } from "react";
import Header from "./Header";
import Card from "./Card";

const cardImages = [
  { src: "img/angular.png" },
  { src: "img/d3.png" },
  { src: "img/evista.png" },
  { src: "img/jenkins.png" },
  { src: "img/postcss.png" },
  { src: "img/react.png" },
  { src: "img/redux.png" },
  { src: "img/sass.png" },
  { src: "img/ts.png" },
  { src: "img/webpack.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);


   const handleChoice = (card) =>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  

  const shuffleCards = (deckSize) => {
    const shuffledCards = [
      ...cardImages.slice(0, deckSize),
      ...cardImages.slice(0, deckSize),
    ]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  useEffect(()=>{
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        console.log("match")
        reset()
      }
    }
  }, [choiceOne, choiceTwo])


  const reset = () => {
    setTurns(prevTurn => prevTurn+1)
    setChoiceOne(null)
    setChoiceTwo(null)
  }

  return (
    <>
      <div className="App">
        <Header shuffleCards={shuffleCards} />
        <h3>Turn: {turns}</h3>
        <div className="card-grid">
          {cards.map((card) => (
            <Card key={card.id} card={card} handleChoice={handleChoice} />
          ))}
        </div>
      </div>
      ;
    </>
  );
}

export default App;
