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
  randomNumber,
  renderNotification,
  setPlayable,
  playAgain,
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
          randomNumber={randomNumber}
          renderNotification={renderNotification}
          setPlayable={setPlayable}
          playAgain={playAgain}
        />
      ) : null}
    </>
  );
};

export default GameScreen;
