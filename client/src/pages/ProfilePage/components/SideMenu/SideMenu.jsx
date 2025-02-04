import React, { useState } from "react";
import "./SideMenu.css";

const SideMenu = ({ username, userID }) => {
  return (
    <div className="side-menu">
      <div className="side-menu-profile">
        <div className="profile-identification">
          <h1 className="profile-picture">Profile Picture</h1>
          <p className="profile-username">{username}</p>
        </div>
          {userID ? <div className="profile-infos">
            <p className="profile-user-type">user account type</p>
            <p className="profile-user-email">user email</p>
            <p className="profile-user-adress">user adress</p>
          </div>  : ''}
          {userID ? <p className="profile-edit">Edit Profile</p> : ''}
      </div>
    </div>
  );
};

export default SideMenu;
