import React, { useState, useEffect } from "react";
import Header from "./components/header";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTaskHandler = () => {
    setTasks([...tasks, { id: tasks.length + 1, task: newTask }]);
    setNewTask("");
  };

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const deleteTaskHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-start min-h-screen pt-10'>
        <div
          className={`w-full max-w-md p-4 rounded shadow ${
            theme === "light" ? "bg-white" : "bg-gray-800"
          }`}
        >
          <h1
            className={`text-2xl font-bold mb-4 ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            To-Do List
          </h1>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded-md mb-4'
            onClick={changeThemeHandler}
          >
            change them
          </button>
          <div className='flex mb-4'>
            <input
              type='text'
              className='flex-grow p-2 border rounded-l'
              placeholder='Add a new task'
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              className='bg-blue-500 text-white px-4 py-2 rounded-r'
              onClick={addTaskHandler}
            >
              Add Task
            </button>
          </div>
          <ul className='flex flex-col gap-2'>
            {tasks.map((task) => (
              <div className='flex gap-2'>
                <li
                  key={task.id}
                  className={`px-2 border rounded cursor-pointer w-[70%] ${
                    theme === "light" ? "bg-blue-300" : "bg-white"
                  }`}
                >
                  {task?.task}
                </li>
                <button
                  className='bg-red-300 w-[20%] rounded-md'
                  onClick={() => deleteTaskHandler(task.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
