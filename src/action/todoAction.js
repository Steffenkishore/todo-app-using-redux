export const addTodo = (task) => {
  return {
    type: "ADD_TODO",
    payload: task,
  };
};

export const delTodo = (id) => {
  return {
    type: "DEL_TODO",
    payload: id,
  };
};

export const changeStatus = (check, id) => {
  return {
    type: "CHANGE_STATUS",
    payload: { check, id },
  };
};

export const filterTask = filter => {
  return {
    type: "FILTER_TASK",
    payload: filter
  };
};