import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderOptions.css";

const HeaderOptions = ({activeMenu}) => {
  
  return (
    <div className={`header-menu-options ${activeMenu ? "show" : "hidden"}`}>
      <ul>
        <li>
          <Link to={"/login"} className="header-link-color">
            Login
          </Link>
        </li>
        <li>
          <Link to={"/register"} className="header-link-color">
            Criar conta
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderOptions;
