import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { changeStatus, delTodo, filterTask } from "../../action/todoAction";

const TodoItems = ({ task, taskStatus, taskDel }) => {
  const taskList = useSelector((state) => state.todos.tasks);
  const filterVal = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();
  let filteredTaskList;

  if (filterVal === "active") {
    filteredTaskList = taskList.filter((e) => e.completed === false);
  } else if (filterVal === "completed") {
    filteredTaskList = taskList.filter((e) => e.completed === true);
  } else {
    filteredTaskList = taskList;
  }
  
  console.log(taskList);

  return (
    <div className="todo-list-container">
      {filteredTaskList.length === 0 ? (
        <p className="empty-message">No Tasks Available</p>
      ) : (
        <div>
          <div className="my-task-con-1">
            <h3>My Tasks</h3>

            <div className="filter-btn-con">
              <button
                className={
                  filterVal === "all"
                    ? "filter-btn active-filter"
                    : "filter-btn"
                }
                onClick={() => dispatch(filterTask("all"))}
              >
                All
              </button>

              <button
                className={
                  filterVal === "active"
                    ? "filter-btn active-filter"
                    : "filter-btn"
                }
                onClick={() => dispatch(filterTask("active"))}
              >
                Active
              </button>

              <button
                className={
                  filterVal === "completed"
                    ? "filter-btn active-filter"
                    : "filter-btn"
                }
                onClick={() => dispatch(filterTask("completed"))}
              >
                Completed
              </button>
            </div>
          </div>
          <ul className="todo-list">
            {filteredTaskList.map((e) => (
              <li
                key={e.id}
                className={e.completed ? "todo-item-checked" : "todo-item"}
              >
                <label htmlFor={e.id} className="task-label">
                  <input
                    type="checkbox"
                    id={e.id}
                    checked={e.completed}
                    className="task-checkbox"
                    onChange={(event) =>
                      dispatch(changeStatus(event.target.checked, e.id))
                    }
                  />

                  <span
                    className={`task-text ${e.completed ? "completed-task" : ""}`}
                  >
                    {e.task}
                  </span>
                </label>

                <button
                  className="delete-btn"
                  onClick={() => dispatch(delTodo(e.id))}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoItems;
