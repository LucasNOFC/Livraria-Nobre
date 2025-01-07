import React from "react";
import "./RegisterPage.css";
import RegisterFields from "./components/RegisterFields/RegisterFields";

const RegisterPage = () => {
  return (
    <div>
      <form>
        <RegisterFields/>
      </form>
    </div>
  );
};

export default RegisterPage;
