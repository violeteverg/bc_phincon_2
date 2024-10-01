import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

export const Input: React.FC = () => {
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();
  const submitHander = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (text === "") {
      return alert("please enter a task");
    }
    if (e.key === "Enter") {
      dispatch(addTodo({ text, completed }));
      setText("");
      setCompleted(false);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className='w-[90vw] lg:w-[40vw] h-[50px] bg-white gap-1 rounded-md  shadow-md outline-none p-4 flex items-center'>
        <label className='relative inline-block h-5 w-5 cursor-pointer'>
          <input
            type='checkbox'
            checked={completed}
            onChange={() => setCompleted(!completed)}
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
        <input
          className='w-full outline-none bg-transparent text-gray-700 p-2'
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={submitHander}
          placeholder='Create a new todo...'
        />
      </div>
    </form>
  );
};
