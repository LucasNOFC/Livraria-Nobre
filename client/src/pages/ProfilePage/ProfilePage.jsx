import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";

const ProfilePage = ({ username }) => {
  const { id } = useParams();
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

  return (
    <div>
      {error && <h1>{error}</h1>}
      {auth ? (
        <h1>{username}, sua página de perfil</h1>
      ) : (
        ''
      )}
    </div>
  );
};

export default ProfilePage;
