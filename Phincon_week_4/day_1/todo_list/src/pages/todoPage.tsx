import { Header } from "../components/header";
import { Input } from "../components/input";
import TodoList from "../components/todoList";

export const TodoPage = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <Header />
      <Input />
      <TodoList />
    </div>
  );
};
