import { useRef } from "react";
import { v4 as uuvid } from "uuid";
import { useDispatch } from "react-redux";
import "./index.css";
import { addTodo } from "../../reducer/todoReducer";

const TodoInput = () => {
  const dispatch = useDispatch();

  const InputElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!InputElement.current.value.trim()) return;

    const data = {
      id: uuvid(),
      task: InputElement.current.value,
      completed: false,
    };

    dispatch(addTodo(data));
    InputElement.current.value = "";
  };

  return (
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          ref={InputElement}
          placeholder="Enter a task..."
          className="todo-input"
        />

        <button type="submit" className="add-btn">
          Add Task
        </button>
      </form>
  );
};

export default TodoInput;
