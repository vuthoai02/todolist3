import { INIT_TASKS } from "../constant/init";

export const taskReducer = (state = INIT_TASKS, action: any) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: [...state.tasks, action.payload]
            };
        case 'DELETE_TASK':
            return {
                tasks: state.tasks.filter((task: any) => task.id !== action.payload)
            };
        case 'UPDATE_TASK':
            return {
                tasks: state.tasks.map((task: any) => task.id === action.payload.id ? action.payload : task)
            };
        default:
            return state;
    }
}