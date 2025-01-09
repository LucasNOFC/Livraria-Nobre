import React from "react";
import "../../../RegisterPage/components/RegisterFields/RegisterFields.css";
import { Link } from "react-router-dom";

const LoginFields = () => {
  return (
    <div className="register-form">
      <h1 className="register-tittle">Login</h1>
      <div className="register-input">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <input
          type="submit"
          placeholder="Registrar conta"
          className="submit-input"
        />
      </div>
      <p>
        Não possui uma conta?{" "}
        <Link to={"/register"} className="register-havecount">
          Criar conta
        </Link>
      </p>
    </div>
  );
};

export default LoginFields;
