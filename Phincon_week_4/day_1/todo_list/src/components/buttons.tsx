import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setFilter } from "../redux/todoSlice";

export const Button = () => {
  const dispatch = useDispatch();
  const { filter, theme } = useSelector((state: RootState) => state.todos);
  return (
    <div className='flex justify-center items-center'>
      <button
        className={`${
          filter === "all" ? "text-blue-500 font-bold" : "text-gray-500"
        } hover:underline ${theme.mode === "dark" ? "text-white" : ""}`}
        onClick={() => dispatch(setFilter("all"))}
      >
        All
      </button>
      <button
        className={`ml-4 ${
          filter === "active" ? "text-blue-500 font-bold" : "text-gray-500"
        } hover:underline ${theme.mode === "dark" ? "text-white" : ""}   `}
        onClick={() => dispatch(setFilter("active"))}
      >
        Active
      </button>
      <button
        className={`ml-4 ${
          filter === "completed" ? "text-blue-500 font-bold" : "text-gray-500"
        } hover:underline ${theme.mode === "dark" ? "text-white" : ""}   `}
        onClick={() => dispatch(setFilter("completed"))}
      >
        Completed
      </button>
    </div>
  );
};
