import React, { useState } from "react";

function Header({ shuffleCards }) {
  const [deckSize, setDeckSize] = useState("");

  const handleChange = (e) => {
    setDeckSize(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    shuffleCards(deckSize);
    e.target.reset();
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "img/logo.png"} alt="logo" />
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>
            Deck size
            <input
              min="3"
              max="10"
              placeholder="3-10"
              type="number"
              value={deckSize}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Set</button>
        </form>
      </div>
    </div>
  );
}

export default Header;
