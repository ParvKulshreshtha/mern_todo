export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [action.payload,...state]
            break;
    
        default:
            return []
            break;
    }
}