function Header({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : "flipping-back"}>
        <img className="front" src={card.src} alt="front" />
        <div className="back" onClick={handleClick}></div>
      </div>
    </div>
  );
}

export default Header;
