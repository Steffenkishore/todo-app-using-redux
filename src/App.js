
import './App.css';
import TodoInput from './component/TodoInput';
import TodoItems from './component/TodoItems';
import { BiTask } from "react-icons/bi";
<BiTask />


function App() {
  return (
    <div className="todo-container">
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <BiTask style={{ alignSelf:"center", marginRight: "5px", fontSize:"28px"}} />
        <h1 className="todo-title">Todo App</h1>
      </div>
      <TodoInput />
      <TodoItems />
    </div>
  );
}

export default App;
