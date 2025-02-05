import { React, useMemo } from "react";
import "./EditProfilePage.css";
import { redirect, useParams, Navigate } from "react-router-dom";

const EditProfilePage = ({ data }) => {
  const { id } = useParams();

  const authUser = useMemo(() => {
    if (!id || !data.id) return null;
    return id === data.id;
  }, [data.id, id]);


  return (
    <div className="edit-profile-page">
      {data && authUser ? (
        <form action="" className="form-edit">
          <div className="form-fields">
            <label>Nome: </label>
            <input type="text" className="input-field" />
          </div>

          <div className="form-fields">
            <label>Endereço: </label>
            <input type="text" className="input-field" />
          </div>

          <div className="form-fields">
            <label>ProfilePicture: </label>
            <input type="file" className="input-field" />
          </div>

          <button className="send-changes">Enviar</button>
        </form>
      ) : (
        <Navigate to="/" replace />
      )}
    </div>
  );
};

export default EditProfilePage;
