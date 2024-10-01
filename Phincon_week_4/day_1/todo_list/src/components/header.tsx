import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/todoSlice";
import { RootState } from "../redux/store";

export const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.todos);
  return (
    <div className='flex justify-between items-center w-full'>
      <h1 className='text-4xl font-bold text-white'>Todos</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        <img
          src={
            theme.mode === "light"
              ? "./assets/icon-moon.svg"
              : "./assets/icon-sun.svg"
          }
          alt='moon'
        />
      </button>
    </div>
  );
};
