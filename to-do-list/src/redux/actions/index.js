export const ADD_TO_DO = "add_to_do";
export const DELETE_TO_DO = "delete_to_do";
export const COMPLETE_TO_DO ="complete_to_do";

export function add(todo) {
    console.log(todo);
    return {
        type: ADD_TO_DO,
        payload: todo
    };
}

export function remove(todo) {
    return {
        type: DELETE_TO_DO,
        payload: todo
    };
}

export function complete(todo) {
    return {
        type: COMPLETE_TO_DO,
        payload: todo
    };
}
