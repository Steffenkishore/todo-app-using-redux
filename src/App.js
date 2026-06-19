
import './App.css';
import TodoInput from './component/TodoInput';
import TodoItems from './component/TodoItems';


function App() {
  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo App</h1>
      <TodoInput />
      <TodoItems />
    </div>
  );
}

export default App;
