import React from "react";
import Profile from "./Profile";

const GameScreen = ({ name, profileData, setProfileData, startGame }) => {
  return (
    <>
      {startGame ? (
        <Profile
          name={name}
          profileDat={profileData}
          setProfileData={setProfileData}
          startGame={startGame}
        />
      ) : null}
    </>
  );
};

export default GameScreen;
