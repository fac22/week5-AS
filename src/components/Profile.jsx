/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import BodyShape from "./BodyShape";
import WrongLetters from "./WrongLetters";
import Word from "./Word";

function Profile(props) {
  if (!props.name) return <div>Loading...</div>;
  return (
    <div className="testwrap">
      <div className="player-container">
        <h2>Hello Player {Math.floor(Math.random() * 457)}</h2>
        <img
          height="125"
          width="125"
          src={props.profileData.avatar_url}
          alt={props.name}
        />
      </div>
      <div className="game-container">
        <BodyShape avatar={props.profileData.avatar_url} />
        <WrongLetters />
        <Word />
      </div>
    </div>
  );
}

export default Profile;

// if (data.name) {
//     document.circle.style.display = inline
// }
