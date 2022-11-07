const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn React", completed: false, priority: "High" },
    { id: 2, name: "Learn Yoge", completed: true, priority: "Medium" },
    { id: 3, name: "Learn Js", completed: false, priority: "Low" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "todoList/toggleTodoStatus":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "filters/searchFilterChange":
      return {
        ...state,
        filters: { ...state.filters, search: action.payload },
      };
    case "filters/statusFilterChange":
      return {
        ...state,
        filters: { ...state.filters, status: action.payload },
      };
    case "filters/prioritiesFilterChange":
      return {
        ...state,
        filters: { ...state.filters, priority: action.payload },
      };
    default:
      return state;
  }
};
export default rootReducer;
