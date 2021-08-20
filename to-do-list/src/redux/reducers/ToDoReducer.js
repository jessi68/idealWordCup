import { ADD_TO_DO, DELETE_TO_DO } from "../actions";

export const toDoReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TO_DO:
            return [...state, action.payload]
        case DELETE_TO_DO:
            return [...action.payload]
        default:
            return state;
    }
}