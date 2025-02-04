import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import "./ProfilePage.css";
import SideMenu from "./components/SideMenu/SideMenu";
import MainActivites from "./components/MainActivites/MainActivites";
import axios from "axios";

const ProfilePage = ( {data} ) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("JUICE")
    const getUser = async (id) => {
      try {
        const res = await axios.get(`http://localhost:5100/getUser/${id}`);
        setUser(res.data.user);
      } catch (error) {
        if (error.response) {
          console.error("Erro:", error.response.data.message);
        }
      } finally {
        setLoading(false);
      }
    };
    getUser(id);
  }, [id]);


  return (
    <div className="profile-container">
      {error && <h1>{error}</h1>}
      <div className="profile-options">
        <SideMenu
          username={user ? user.firstName : ""}
          email={user ? user.email : ""}
          accountType={user ? user.Buyer : ""}
          userID={user ? id === data.id ? data.id : false : ''}
          userAdress={""}
        />
        <MainActivites username={user ? user.firstName : ''} />
      </div>
    </div>
  );
};

export default ProfilePage;
