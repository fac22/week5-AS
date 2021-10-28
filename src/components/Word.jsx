import React from "react";

const Word = ({ randomWord, correctLetters }) => {
  return (
    <div className="word">
      {randomWord.split("").map((letter, index) => {
        return (
          <span className="letter" key={index}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
