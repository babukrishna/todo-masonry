import { useState } from "react";
import { PlusIcon } from "./Icons";

const CreateNote = ({ addNotes }) => {
  const [userInput, setUserInput] = useState({
    title: "",
    desc: "",
  });
  const onchange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevInput) => {
      return { ...prevInput, [name]: value };
    });
  };
  const clickHandler = (e) => {
    e.preventDefault();
    addNotes(userInput)
  }
  return (
    <div className="container createNote">
      <div className="card">
        <div className="card-body">
          <form className="">
            <input
              name="title"
              className="form-control"
              value={userInput.title}
              onChange={onchange}
              placeholder="Title..."
            />
            <textarea
              name="desc"
              className="form-control"
              value={userInput.desc}
              onChange={onchange}
              placeholder="Description..."
            />
            <button className="btn" onClick={clickHandler}>
              <PlusIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
