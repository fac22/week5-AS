import React from "react";

function handleKeyUp(event) {
  //key code for enter
  if (event.keyCode === 13) {
    event.preventDefault();
    event.target.blur();
  }
}

const SearchUser = ({ setUserName, setStartGame, playAgain }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.target.blur();
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
          onKeyUp={handleKeyUp}
        ></input>
      </label>
      <button type="submit">Play</button>
    </form>
  );
};
export default SearchUser;
