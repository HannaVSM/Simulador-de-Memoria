export default (state, action) => {
  switch (action.type) {
    case "ADD_PROCESS":
      return {
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_PROCESS":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.PID !== action.payload),
      };
    case "CLEAR":
      return {
        tasks: [],
      };
    default:
      return state;
  }
};
