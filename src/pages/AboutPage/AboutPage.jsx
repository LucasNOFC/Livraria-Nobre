import React from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <div className="about-container">
        <h1 className="about-main-tittle">Esse ecommerce é um projeto de estudos</h1>
        <p>Feito por <Link to={'https://github.com/LucasNOFC'}>LucasNOFC</Link></p>
      </div>
    </div>
  );
};

export default AboutPage;
