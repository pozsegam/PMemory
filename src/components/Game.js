import { useState, useEffect } from "react";
import Header from "./Header";
import Card from "./Card";

const cardImages = [
  { src: "img/angular.png", match: false},
  { src: "img/d3.png" , match: false},
  { src: "img/evista.png", match: false },
  { src: "img/jenkins.png" , match: false},
  { src: "img/postcss.png" , match: false},
  { src: "img/react.png" , match: false},
  { src: "img/redux.png" , match: false},
  { src: "img/sass.png" , match: false},
  { src: "img/ts.png" , match: false},
  { src: "img/webpack.png" , match: false},
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
      else{
        reset()
        console.log("no match")
      }
    }
  }, [choiceOne, choiceTwo])


  const reset = () => {
    setTurns(() => setTurns(turns+1))
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
