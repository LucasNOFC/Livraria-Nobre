import React from "react";
import './Gender.css'

const Gender = ({ genderType }) => {
  return (
    <div className="gender-box w-64 p-2 h-6">
      <input type="checkbox" className="input-gender" id={genderType} />
      <label>{genderType}</label>
    </div>
  );
};

export default Gender;
