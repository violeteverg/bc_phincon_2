import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import TodoItem from "./todoItem";
import { clearCompleted } from "../redux/todoSlice";
import { Button } from "./buttons";
import { useMediaQuery } from "../hooks/useMediaQuery";

const TodoList: React.FC = () => {
  const { todos, filter, theme } = useSelector(
    (state: RootState) => state.todos
  );
  const isMobile = useMediaQuery("(max-width: 768px)");
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });
  console.log(todos);
  console.log(theme, "theme");

  return (
    <>
      <div
        className={`w-[90vw] lg:w-[40vw] bg-white text-black ${
          theme.mode === "dark" ? "bg-blue-950 text-white" : ""
        }  rounded-lg shadow-md p-6`}
      >
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              theme={theme.mode}
            />
          ))
        ) : (
          <p className='text-gray-500 text-center'>No tasks available</p>
        )}
        <div className='mt-4 flex justify-between items-center'>
          <span className={`${theme.mode === "dark" ? "text-white" : ""}`}>
            {todos.length} items left
          </span>
          {isMobile ? <div className='hidden'>{<Button />}</div> : <Button />}

          <button
            className='text-red-500 hover:underline'
            onClick={() => dispatch(clearCompleted())}
          >
            Clear Completed
          </button>
        </div>
      </div>
      {isMobile && (
        <div
          className={`w-[90vw] lg:w-[40vw] ${
            theme.mode === "dark" ? "bg-blue-950" : "bg-white"
          } rounded-lg shadow-md p-6  justify-center items-center`}
        >
          <Button />
        </div>
      )}
    </>
  );
};

export default TodoList;
