import { useSelector } from "react-redux";
import { TodoPage } from "./pages/todoPage";
import { RootState } from "./redux/store";

function App() {
  const { theme } = useSelector((state: RootState) => state.todos);
  return (
    <div
      className={`bg-[url('./assets/bg-desktop-light.jpg')] bg-fixed bg-no-repeat bg-[length:100%_40%] bg-white ${
        theme.mode === "dark" ? "bg-[url('./assets/bg-desktop-dark.jpg')]" : ""
      }`}
    >
      <div className='flex justify-center items-center min-h-screen'>
        <TodoPage />
      </div>
    </div>
  );
}

export default App;
