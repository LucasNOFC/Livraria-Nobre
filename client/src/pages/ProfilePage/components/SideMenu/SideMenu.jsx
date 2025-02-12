import React, { useEffect, useState } from "react";
import "./SideMenu.css";
import { Link } from "react-router-dom";
import ModalProfilePicture from "../ModalProfilePicture/ModalProfilePicture";
import api from "../../../../api/api";

const SideMenu = ({ username, userID, typeUser, pageID }) => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [olderProfilePhoto, setOlderProfilePhoto] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (userID) {
      const getProfilePicture = async () => {
        try {
          const res = await api.get(`/profile-photo/${userID}`);
          if (res.status === 200 && res.data.profile_picture) {
            const profilePic = `data:image/png;base64,${res.data.profile_picture}`;
            setProfilePhoto(profilePic);
            setOlderProfilePhoto(profilePic);
          } else {
            console.error("Foto de perfil não encontrada.");
          }
        } catch {
          console.error("Erro ao buscar foto de perfil.");
        }
      };

      getProfilePicture();
    }
  }, [userID]);

  const handleFileChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!profilePhoto) {
      console.error("Nenhum arquivo selecionado.");
      return;
    }

    const formData = new FormData();
    formData.append("profilePhoto", profilePhoto);
    formData.append("userID", userID);

    try {
      const response = await api.post("/register/profile-photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        console.log("Upload realizado com sucesso!", response.data);
        window.location.reload();
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
    <div className="side-menu-profile-page">
      <div className="side-menu-profile">
        <div className="profile-identification">
          <img
            src={
              olderProfilePhoto || "../../../../../../public/images/default/profile-picture.png"
            }
            alt="profile picture"
            className="profile-picture"
            onClick={pageID === userID  ? () => setIsOpen(true) : ''}
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
      {isOpen && (
        <ModalProfilePicture
          handleFileChange={handleFileChange}
          handleUpload={handleUpload}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default SideMenu;
