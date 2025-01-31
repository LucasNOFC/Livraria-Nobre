import React, { useState, useEffect } from "react";
import "../../../RegisterPage/components/RegisterFields/RegisterFields.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import api from "../../../../api/api";

const LoginFields = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const location = useLocation();
  const messageCreated = location.state?.message;

  const [message, setMessage] = useState();
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Email e senha são obrigatórios.");
      return;
    }

    try {
      const response = await api.post("/login", formData);
      setMessage(response.data.message);
      const tokenAuth = response.data.token;
      localStorage.setItem("authToken", tokenAuth);
      navigate("/", { replace: true });
      window.location.reload();
      setError("");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Erro ao tentar logar. Tente novamente."
      );
    }

    
  };

  useEffect(() => {
    api.get("/").catch(() => {
      setMessage("Erro ao conectar ao servidor.");
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="register-form">
        <h1 className="register-tittle">Login</h1>

        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
        {!message
          ? messageCreated && <p className="sucess-message">{messageCreated}</p>
          : ""}

        <div className="register-input">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input type="submit" className="submit-input" />
        </div>

        <p>
          Não possui uma conta?{" "}
          <Link to={"/register"} className="register-havecount">
            Criar conta
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginFields;
