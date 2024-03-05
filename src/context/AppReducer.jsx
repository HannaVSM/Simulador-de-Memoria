export default (state, action) => {
    switch(action.type) {
        case "ADD_PROCESS":
            return {
                tasks: [...state.tasks, action.payload]
            };
            default:
            return state
    }
}