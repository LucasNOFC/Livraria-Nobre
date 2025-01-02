import React from 'react'
const Condiction = ({name, isChecked, onToggle}) => {
  return (
    <div className="gender-box w-64 p-2 h-6">
      <input 
        type="checkbox" 
        className="input-gender" 
        id={name}
        checked={isChecked}
        onChange={() => onToggle(name)}
        />
      <label htmlFor={name}>{name}</label>
    </div>
  )
}

export default Condiction