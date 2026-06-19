export const loadTodos = () => {
  try {
    const data = localStorage.getItem("todoState");

    if (!data) {
      return {
        tasks: [],
        filter: "all",
      };
    }

    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return {
      tasks: [],
      filter: "all",
    };
  }
};

export const saveTodos = (state) => {
  const saveData = { ...state, filter: "all" };
  try {
    localStorage.setItem("todoState", JSON.stringify(saveData));
  } catch (error) {
    console.log(error);
  }
};
