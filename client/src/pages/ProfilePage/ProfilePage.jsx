import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import "./ProfilePage.css";
import SideMenu from "./components/SideMenu/SideMenu";
import MainActivites from "./components/MainActivites/MainActivites";
import axios from "axios";

const ProfilePage = ({ username, userID }) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setAuth(false);
    setError(null);

    if (!id) {
      setError("ID inválido.");
      return;
    }

    const verifyAuth = async () => {
      try {
        const response = await api.post("/verify", { id });
        if (response.status === 200) {
          setAuth(true);
        } else {
          setError("ID não encontrado.");
        }
      } catch (error) {
        console.error("Error verificando usuário:", error);
        setError("Error ao verificar o usuário.");
      }
    };

    verifyAuth();
  }, [id]);

  useEffect(() => {
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

  console.log(user);

  return (
    <div className="profile-container">
      {error && <h1>{error}</h1>}
      <div className="profile-options">
        <SideMenu
          username={user.firstName}
          email={user.email}
          accountType={user.Buyer}
          userID={id === userID ? userID : false}
          userAdress={""}
        />
        <MainActivites username={user.firstName} />
      </div>
    </div>
  );
};

export default ProfilePage;
