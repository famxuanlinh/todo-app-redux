export const todoListSelector = (state) => {
  const searchText = searchTextSelector(state);
  const status = statusFilterSelector(state);
  const priorities = prioritiesFilterSelector(state);
  //   console.log("🚀 ~ file: selectors.js ~ line 5 ~ todoListSelector ~ priorities", priorities)
  const todoRemaining = state.todoList.filter((todo) => {
    if (status === "All") {
      // Status = All và nếu priorities.length === 1 thì nế phải ktra cả searhText và priority
      //Còn === 0 mình chỉ care đển searchText
      return priorities.length
        ? todo.name.includes(searchText) && priorities.includes(todo.priority)
        : todo.name.includes(searchText);
    }
    // Check có searchText và status là completed hay ko.
    //Nếu có thì hiển thị completed 
    // Nếu ko thì check xem có priority ko (priorities.length)  nếu có thì hiển thị thêm cả priority còn ko thì === true tức ko làm gì cả (chỉ trả về !completed)
    return todo.name.includes(searchText) && (
      status === "Completed"
        ? todo.completed
        : !todo.completed &&
            (priorities.length ? priorities.includes(todo.priority) : true)
    );
  });
  return todoRemaining;
};

export const searchTextSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const prioritiesFilterSelector = (state) => state.filters.priority;
