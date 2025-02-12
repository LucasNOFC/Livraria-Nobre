import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import "./ProfilePage.css";
import SideMenu from "./components/SideMenu/SideMenu";
import MainActivites from "./components/MainActivites/MainActivites";
import axios from "axios";

const ProfilePage = ({ data }) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const getUser = async (id) => {
      try {
        const res = await axios.get(`http://localhost:5100/getUser/${id}`);
        setUser(res.data.user);
      } catch (error) {
        if (error.response) {
          console.error("Erro:", error.response.data.message);
        }
      }
    };
    getUser(id);
  }, [id]);

  return (
    <div className="profile-container">
      <div className="profile-options">
        <SideMenu
          username={user ? user.firstName : ""}
          typeUser={user ? user.typeUser : ""}
          pageID = {id}
          userID={user && data ? (id === data.id ? data.id : false) : ""}
        />
        <MainActivites username={user ? user.firstName : ""} />
      </div>
    </div>
  );
};

export default ProfilePage;
