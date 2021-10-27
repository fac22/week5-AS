/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import BodyShape from "./BodyShape";
import WrongLetters from "./WrongLetters";
import Word from "./Word";

function Profile(props) {
  if (!props.name) return <div>Loading...</div>;
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <img
        height="125"
        width="125"
        src={props.profileData.avatar_url}
        alt={props.name}
      />
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
