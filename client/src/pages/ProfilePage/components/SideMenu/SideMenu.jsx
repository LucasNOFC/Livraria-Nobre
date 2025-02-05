import React, { useState } from "react";
import "./SideMenu.css";
import { Link } from "react-router-dom";

const SideMenu = ({ username, userID, typeUser }) => {
  return (
    <div className="side-menu">
      <div className="side-menu-profile">
        <div className="profile-identification">
          <img src="../../../../../../public/images/default/profile-picture.png" alt="profile picture" className="profile-picture"/>
          <p className="profile-username">{username}</p>
        </div>
          {userID ? <div className="profile-infos">
            <p className="profile-user-type">{typeUser}</p>
          </div>  : ''}
          {userID ? <Link className="profile-edit" to={`/profile-page/${userID}/edit`}>Edit Profile</Link> : ''}
      </div>
    </div>
  );
};

export default SideMenu;
