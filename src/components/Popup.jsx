import React from "react";

const checkWin = (correct, wrong, word) => {
  let status = "win";

  //win
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  //lose
  if (wrong.length === 6) {
    status = "lose";
  }

  return status;
};

const Popup = ({ correctLetters, wrongLetters, randomWord, setPlayable }) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, randomWord) === "win") {
    finalMessage = "You won!";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, randomWord) === "lose") {
    finalMessage = "You lost";
    finalMessageRevealWord = `the word was: ${randomWord}`;
    playable = false;
  }

  //no dependency, we want to run this every time we type a letter in
  React.useEffect(() => setPlayable(playable));

  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
