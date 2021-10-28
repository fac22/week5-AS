import React from "react";
import GameComponents from "./GameComponents";

const GameScreen = ({ name, profileData, setProfileData, startGame }) => {
  return (
    <>
      {startGame ? (
        <GameComponents
          name={name}
          profileData={profileData}
          setProfileData={setProfileData}
          startGame={startGame}
        />
      ) : null}
    </>
  );
};

export default GameScreen;
