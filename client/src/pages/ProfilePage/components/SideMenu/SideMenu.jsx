import React, { useState } from "react";
import "./SideMenu.css";
import { Link } from "react-router-dom";
import ModalProfilePicture from "../ModalProfilePicture/ModalProfilePicture";
import api from "../../../../api/api";

const SideMenu = ({ username, userID, typeUser }) => {
  const [profilePhoto, setprofilePhoto] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!profilePhoto) {
      console.error("Nenhum arquivo selecionado.");
      return;
    }

    const formData = new FormData();
    formData.append("profile_photo", profilePhoto);
    formData.append("userID", userID);

    try {
      const response = await api.post("/register/pro", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        console.log("Upload realizado com sucesso!", response.data);
      } else {
        console.error("Erro ao realizar upload:", response.data);
      }
    } catch (error) {
      console.error(
        "Erro ao realizar upload:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="side-menu">
      <div className="side-menu-profile">
        <div className="profile-identification">
          <img
            src="../../../../../../public/images/default/profile-picture.png"
            alt="profile picture"
            className="profile-picture"
            onClick={() => setIsOpen(true)}
            style={{ cursor: "pointer" }}
          />
          <p className="profile-username">{username}</p>
        </div>
        {userID ? (
          <div className="profile-infos">
            <p className="profile-user-type">{typeUser}</p>
          </div>
        ) : (
          ""
        )}
        {userID ? (
          <Link className="profile-edit" to={`/profile-page/${userID}/edit`}>
            Edit Profile
          </Link>
        ) : (
          ""
        )}
      </div>
        {isOpen && <ModalProfilePicture handleFileChange={handleFileChange} setIsOpen={setIsOpen}/>}
    </div>
  );
};

export default SideMenu;
