import { CreateTodoInput, DeleteTodoInput, UpdateTodoInput } from './api/types';

export type Todo = {
    id: string
    text: string
    isCompleted: boolean
};

export type Todos = Array<Todo>;

// ----------------------------- Fetch -----------------------------
export const SET_TODOS = 'SET_TODOS';
export type SetTodosActionType = {
    type: typeof SET_TODOS;
    payload: Todos;
};
export type SetTodosContract = (payload: Todos) => SetTodosActionType

// ----------------------------- Create -----------------------------
export const SET_TODO = 'SET_TODO';
export type SetTodoActionType = {
    type: typeof SET_TODO;
    payload: Todo;
};
export type SetTodoContract = (payload: Todo) => SetTodoActionType

// ----------------------------- Update -----------------------------
export const UPDATE_TODO = 'UPDATE_TODO';
export type UpdateTodoActionType = {
    type: typeof UPDATE_TODO;
    payload: Todo;
};
export type UpdateTodoContract = (payload: Todo) => UpdateTodoActionType

// ----------------------------- Delete -----------------------------
export const DELETE_TODO = 'DELETE_TODO';
export type DeleteTodoActionType = {
    type: typeof DELETE_TODO;
    payload: string;
};
export type DeleteTodoContract = (payload: string) => DeleteTodoActionType

// Saga actions
export const CREATE_TODO_ASYNC = 'CREATE_TODO_ASYNC';
export type CreateTodoActionTypeASYNC = {
    type: typeof CREATE_TODO_ASYNC;
    payload: CreateTodoInput;
}
export const UPDATE_TODO_ASYNC = 'UPDATE_TODO_ASYNC';
export type UpdateTodoActionTypeASYNC = {
    type: typeof UPDATE_TODO_ASYNC;
    payload: UpdateTodoInput;
}
export const DELETE_TODO_ASYNC = 'DELETE_TODO_ASYNC';
export type DeleteTodoActionTypeASYNC = {
    type: typeof DELETE_TODO_ASYNC;
    payload: DeleteTodoInput;
}

export type TodoActionTypesASYNC =
|CreateTodoActionTypeASYNC
|UpdateTodoActionTypeASYNC
|DeleteTodoActionTypeASYNC;

export type TodosActionTypes =
    | SetTodosActionType
    | SetTodoActionType
    | UpdateTodoActionType
    | DeleteTodoActionType

