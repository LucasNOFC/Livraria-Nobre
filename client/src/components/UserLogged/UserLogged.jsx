import React, { act, useState } from "react";
import "./UserLogged.css";
import ProfileContainer from "../ProfileContainer/ProfileContainer";

const UserLogged = ({ username, userID, activeMenu }) => {
  const [turn, setTurn] = useState(false);

  const turnOn = () => {
    setTurn(!turn);
  };

  return (
    <div className="name-container">
      <h2>Bem vindo:</h2>
      <span className="name-handler" onClick={turnOn}>
        {username}
      </span>
      {activeMenu ? <div className="options-list">
        <ProfileContainer userID={userID} />
      </div> : ''}
    </div>
  );
};

export default UserLogged;
