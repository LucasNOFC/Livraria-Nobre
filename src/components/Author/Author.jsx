import { React} from "react";

const Author = ({ authorName }) => {
  return (
    <div className="gender-box w-64 p-2 h-6">
      <input type="checkbox" className="input-gender" id={authorName} />
      <label>{authorName}</label>
    </div>
  );
};

export default Author;
