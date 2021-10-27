import React from "react";
import Profile from "./Profile";

const GameScreen = (props) => {
  return (
    <>
      {props.startGame ? (
        <Profile
          name={props.name}
          profileData={props.profileData}
          setProfileData={props.setProfileData}
          startGame={props.startGame}
        />
      ) : null}
    </>
  );
};

export default GameScreen;
