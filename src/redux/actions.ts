import { task } from "../constant/init";
import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("ADD_TASK", (data: task) => {
    return {
        payload: data
    };
});

export const deleteTask = createAction("DELETE_TASK", (id: number) => {
    return {
        payload: id
    };
});

export const updateTask = createAction("UPDATE_TASK", (data: task) => {
    return {
        payload: data
    };
});