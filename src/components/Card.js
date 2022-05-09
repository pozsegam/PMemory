function Header({ card, handleChoice }) {
  const handleClick = () =>{
    handleChoice(card)
  }

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="front" />
        <img className="back" onClick={handleClick} src={process.env.PUBLIC_URL + "img/cardBg.png"} />
      </div>
    </div>
  );
}

export default Header;
