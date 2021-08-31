import React from "react";
const Form = ({ text, setText, setTodo, todo }) => {
  const onchange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  const onsubmit = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      {
        text: text,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setText("");
  };
  return (
    <form>
      <input
        value={text}
        type="text"
        onChange={onchange}
        className="todo-input"
      />
      <button onClick={onsubmit} className="todo-button" type="submit">
        Add
      </button>
    </form>
  );
};
export default Form;
