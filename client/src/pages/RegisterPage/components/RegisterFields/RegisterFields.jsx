import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterFields.css";

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


  return (
    <form onSubmit={''}>
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
