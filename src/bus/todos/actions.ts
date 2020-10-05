// Instruments
import * as types from './types';
import { UpdateTodoInput, CreateTodoInput, DeleteTodoInput } from '../../bus/todos/api/types';

export const setTodosAction: types.SetTodosContract = (payload) => ({
    type: types.SET_TODOS,
    payload,
});

export const setTodoAction: types.SetTodoContract = (payload) => ({
    type: types.SET_TODO,
    payload,
});

export const updateTodoAction: types.UpdateTodoContract = (payload) => ({
    type: types.UPDATE_TODO,
    payload,
});

export const deleteTodoAction: types.DeleteTodoContract = (payload) => ({
    type: types.DELETE_TODO,
    payload,
});

// Saga actions

export const deleteTodoSagaAction = (payload:DeleteTodoInput):types.DeleteTodoSagaActionType => {
    return { type: types.DELETE_TODO_SAGA,
        payload };
};
export const updateTodoSagaAction = (payload:UpdateTodoInput) :types.UpdateTodoSagaActionType=> {
    return { type: types.UPDATE_TODO_SAGA, payload };
};
export const createTodoSagaAction = (payload :CreateTodoInput):types.CreateTodoSagaActionType => {
    return { type: types.CREATE_TODO_SAGA, payload };
};
