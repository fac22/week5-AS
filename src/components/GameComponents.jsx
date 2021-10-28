/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import BodyShape from "./BodyShape";
import WrongLetters from "./WrongLetters";
import Word from "./Word";
import Fetch from "./Fetch";

function GameComponents({ name, profileData, setProfileData, startGame }) {
  if (!name) return <div>Loading...</div>;
  return (
    <div className="testwrap">
      <Fetch
        name={name}
        setProfileData={setProfileData}
        startGame={startGame}
        profileData={profileData}
      />
      <div>
        <div className="game-container">
          <BodyShape profileData={profileData} />
          <WrongLetters />
          <Word />
        </div>
      </div>
    </div>
  );
}

export default GameComponents;
