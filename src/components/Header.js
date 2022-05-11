import React, { useState } from "react";

function Header({ shuffleCards }) {
  const [deckSize, setDeckSize] = useState("");

  const handleChange = (e) => {
    setDeckSize(e.currentTarget.value);
  };

  //deck size kezelese
  const handleSubmit = (e) => {
    e.preventDefault();
    shuffleCards(deckSize);
    e.target.reset();
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "img/rmbgLogo.png"} alt="logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <label>Deck size:</label>
        <input
          min="3"
          max="10"
          placeholder="3-10"
          type="number"
          value={deckSize}
          onChange={handleChange}
        />
        <button type="submit">Set</button>
      </form>
    </div>
  );
}

export default Header;
