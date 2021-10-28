import React from "react";

const SearchUser = ({ setUserName, setStartGame, playAgain }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setStartGame(true);
        setUserName(event.target.username.value);
        playAgain();
      }}
    >
      <label>
        Enter your GitHub username
        <input
          type="search"
          aria-label="search github username"
          placeholder="Github username"
          name="username"
          id="username"
        ></input>
      </label>
      <button type="submit">Play</button>
    </form>
  );
};
export default SearchUser;
