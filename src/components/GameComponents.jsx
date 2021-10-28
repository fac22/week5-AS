/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import BodyShape from "./BodyShape";
import WrongLetters from "./WrongLetters";
import Word from "./Word";
import Fetch from "./Fetch";

function GameComponents({
  name,
  profileData,
  setProfileData,
  startGame,
  correctLetters,
  wrongLetters,
  randomWord,
}) {
  if (!name) return <div>Loading...</div>;
  return (
    <>
      <Fetch
        name={name}
        setProfileData={setProfileData}
        startGame={startGame}
        profileData={profileData}
      />
      <div>
        <div className="game-container">
          <BodyShape avatar={profileData.avatar_url} />
          <WrongLetters wrongLetters={wrongLetters} />
          <Word randomWord={randomWord} correctLetters={correctLetters} />
        </div>
      </div>
    </>
  );
}

export default GameComponents;
