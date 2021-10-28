import React from "react";
import GameComponents from "./GameComponents";

const GameScreen = ({
  name,
  profileData,
  setProfileData,
  startGame,
  correctLetters,
  wrongLetters,
  randomWord,
}) => {
  return (
    <>
      {startGame ? (
        <GameComponents
          name={name}
          profileData={profileData}
          setProfileData={setProfileData}
          startGame={startGame}
          correctLetters={correctLetters}
          wrongLetters={wrongLetters}
          randomWord={randomWord}
        />
      ) : null}
    </>
  );
};

export default GameScreen;
