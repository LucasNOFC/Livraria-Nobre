import { React} from "react";

const Author = ({ authorName, isChecked, onToggle }) => {
  return (
    <div className="gender-box w-64 p-2 h-6">
      <input 
        type="checkbox" 
        className="input-gender" 
        id={authorName}
        checked={isChecked}
        onChange={() => onToggle(authorName)}
        />
      <label htmlFor={authorName}>{authorName}</label>
    </div>
  );
};

export default Author;
