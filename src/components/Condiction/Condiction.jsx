import React from 'react'
const Condiction = ({name}) => {
  return (
    <div className="gender-box w-64 p-2 h-6 ">
      <input type="checkbox" className="input-gender" id={name}/>
      <label>{name}</label>
    </div>
  )
}

export default Condiction