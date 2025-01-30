import React, { useState, useEffect } from "react";
import "./RegisterFields.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../../api/api";

const RegisterFields = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      const response = await api.post("/register", formData);
      setMessage(response.data.message);
      setError("");
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "Erro ao cadastrar.");
    }

    navigate("/login", { replace: true, state: {message: "Prossiga para o login."} });
  };

  useEffect(() => {
    api
      .get("/")
      .then((response) => {
        setMessage(response.data.message || "");
      })
      .catch(() => {
        setMessage("Erro ao conectar ao servidor.");
      });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="register-form">
        <h1 className="register-tittle">Registro</h1>

        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}

        <div className="register-input">
          <input
            type="text"
            name="firstName"
            placeholder="Primeiro nome"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Ultimo nome"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={formData.password}
            name="password"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Confirme a senha"
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
            required
          />
          <input type="submit" className="submit-input" />
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
