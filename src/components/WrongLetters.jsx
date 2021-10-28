import React from "react";

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Incorrect letter!</p>}
        {wrongLetters
          .map((letter, index) => <span key={index}>{letter}</span>)
          //reduce is going to add a comma in between every span
          .reduce(
            (prev, cur) => (prev === null ? [cur] : [prev, ", ", cur]),
            null
          )}
      </div>
    </div>
  );
};

export default WrongLetters;
