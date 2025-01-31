import React, { useState } from "react";
import "./UserLogged.css";
import ProfileContainer from "../ProfileContainer/ProfileContainer";

const UserLogged = ({ username, userID }) => {
  const [turn, setTurn] = useState(false);

  const turnOn = () => {
    if (!turn) setTurn(true);
    else setTurn(false);
  };

  return (
    <div className="name-container">
      <h2>Bem vindo:</h2>
      <span className="name-handler" onClick={turnOn}>
        {username}
      </span>
      {turn ? <div className="options-list">
        <ProfileContainer userID={userID} />
      </div> : ''}
    </div>
  );
};

export default UserLogged;
