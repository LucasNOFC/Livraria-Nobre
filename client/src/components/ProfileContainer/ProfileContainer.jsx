import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ProfileContainer.css";

const ProfileContainer = ({ userID }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
    window.location.reload();
  };

  return (
    <ul className="un-list">
      <li>
        <Link to={`/profile-page/${userID}`}>Ver perfil</Link>
      </li>
      <li>
        <button onClick={logout}>Deslogar</button>
      </li>
    </ul>
  );
};

export default ProfileContainer;
