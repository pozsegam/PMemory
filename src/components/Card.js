function Header({ card, handleChoice }) {
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="front" />
        <img className="back" src={process.env.PUBLIC_URL + "img/cardBg.png"} />
      </div>
    </div>
  );
}

export default Header;
