import React from "react";
import './Gender.css'

const Gender = ({ genderType, isChecked, onToggle }) => {
  return (
    <div className="gender-box w-64 p-2 h-6">
      <input 
        type="checkbox" 
        className="input-gender" 
        id={genderType}
        checked={isChecked}
        onChange={() => onToggle(genderType)}
        />
      <label htmlFor={genderType}>{genderType}</label>
    </div>
  );
};

export default Gender;
