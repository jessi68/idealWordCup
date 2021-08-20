export const ADD_TO_DO = "add_to_do";
export const DELETE_TO_DO = "delete_to_do";
export const COMPLETE_TO_DO ="complete_to_do";

export function add() {
    return {
        type: ADD_TO_DO
    };
}

export function remove() {
    return {
        type: DELETE_TO_DO
    };
}

export function complete() {
    return {
        type: COMPLETE_TO_DO;
    }
}
