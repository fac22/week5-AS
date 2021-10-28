/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import BodyShape from "./BodyShape";
import WrongLetters from "./WrongLetters";
import Word from "./Word";
import Fetch from "./Fetch";
import Popup from "./Popup";
import Notification from "./Notification";

function GameComponents({
  name,
  profileData,
  setProfileData,
  startGame,
  correctLetters,
  wrongLetters,
  randomWord,
  renderNotification,
}) {
  if (!name) return <div>Loading...</div>;
  return (
    <div className="testwrap">
      <Fetch
        name={name}
        setProfileData={setProfileData}
        startGame={startGame}
        profileData={profileData}
      />
      <BodyShape
          avatar={profileData.avatar_url}
          wrongLetters={wrongLetters}
        />
      
        <div className="game-container">
          <WrongLetters wrongLetters={wrongLetters} />
          <Word randomWord={randomWord} correctLetters={correctLetters} />
        </div>
      <Popup />
      <Notification renderNotification={renderNotification} />
    </div>
  );
}

export default GameComponents;
