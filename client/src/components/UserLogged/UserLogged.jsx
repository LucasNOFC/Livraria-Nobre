import React from "react";
import "./UserLogged.css";
import { replace, useNavigate } from "react-router-dom";

const UserLogged = ({ username }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/", { replace: true });
  };

  return (
    <div className="name-container">
      <h2>Bem vindo:</h2>
      <span className="name-handler" onClick={logout}>
        {username}
      </span>
    </div>
  );
};

export default UserLogged;
