import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/todoSlice";

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  theme: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, theme }) => {
  const dispatch = useDispatch();

  return (
    <div className='flex items-center justify-between py-2 border-b last:border-b-0'>
      <div className='flex items-center gap-2 '>
        <label className='relative inline-block h-5 w-5 cursor-pointer'>
          <input
            type='checkbox'
            checked={completed}
            onChange={() => dispatch(toggleTodo(id))}
            className='appearance-none h-full w-full rounded-full border-2 border-slate-400 checked:border-transparent focus:outline-none transition duration-150 ease-in-out'
          />
          <span
            className={`absolute inset-0 flex items-center justify-center rounded-full transition-colors ${
              completed
                ? "bg-gradient-to-r from-[#57ddff] to-[#c058f3] text-white"
                : "bg-transparent"
            }`}
          >
            {completed && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-3 w-3'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5 13l4 4L19 7'
                />
              </svg>
            )}
          </span>
        </label>
        <span
          className={`ml-2 text-lg ${
            completed ? "line-through text-gray-400" : "text-gray-800"
          } ${theme === "dark" ? "text-white" : ""}`}
        >
          {text}
        </span>
      </div>
      <button onClick={() => dispatch(deleteTodo(id))}>
        <img src={"./assets/x.svg"} alt='delete' />
      </button>
    </div>
  );
};

export default TodoItem;
