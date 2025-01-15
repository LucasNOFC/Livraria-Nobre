import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterFields.css";

const API_URL = "http://localhost:5100";

const RegisterFields = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    passCode: "",
    typeUser: "Buyer",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/`)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Erro ao obter a mensagem:", error);
      });
  }, []);

  return (
    <form onSubmit={""}>
      <div className="register-form">
        <h1 className="register-tittle">Registro</h1>
        <div className="register-input">
          <input type="text" placeholder="Primeiro nome" required />
          <input type="text" placeholder="Ultimo nome" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <input type="password" placeholder="Confimre a senha" required />
          <input
            type="submit"
            placeholder="Registrar conta"
            className="submit-input"
          />
        </div>
        <p>
          Já possui uma conta?{" "}
          <Link to={"/login"} className="register-havecount">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterFields;
