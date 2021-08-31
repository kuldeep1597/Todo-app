import React from "react";
import Todo from "./todo";
const List = ({ todo, setTodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todo &&
          todo.map((item, i) => (
            <Todo
              item={item}
              name={item.text}
              todo={todo}
              key={i}
              setTodo={setTodo}
            />
          ))}
      </ul>
    </div>
  );
};
export default List;
