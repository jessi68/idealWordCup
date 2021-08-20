import { ADD_TO_DO, DELETE_TO_DO } from "../actions";
import { combineReducers } from "redux";

export const toDoReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TO_DO:
            return [...state, action.payload]
        case DELETE_TO_DO:
            return state.filter(todo => todo != action.payload);
        default:
            return state;
    }
}


export const rootReducer = combineReducers({
    toDoReducer
  });