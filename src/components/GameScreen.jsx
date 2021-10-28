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
  renderNotification,
  setPlayable,
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
          renderNotification={renderNotification}
          setPlayable={setPlayable}
        />
      ) : null}
    </>
  );
};

export default GameScreen;
