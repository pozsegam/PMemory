function Header({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="front" />
        <img
          className="back"
          src={process.env.PUBLIC_URL + "img/cardBg.png"}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Header;
