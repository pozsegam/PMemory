function Header({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="front" />
        <img
          className="back"
          onClick={handleClick}
          src={process.env.PUBLIC_URL + "img/cardBg.png"}
        />
      </div>
    </div>
  );
}

export default Header;
