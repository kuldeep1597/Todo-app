import React from "react";
const Todo = ({ name, todo, item, id, setTodo }) => {
  const deleteHandler = () => {
    console.log(item);
    setTodo(todo.filter((ele) => item.id !== ele.id));
  };
  const completeHandler = () => {
    setTodo(
      todo.map((el) => {
        if (el.id === item.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${item.completed ? "completed" : ""}`}>
        {name}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
