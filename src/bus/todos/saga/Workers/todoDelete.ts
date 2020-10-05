// Saga
import { put, call } from 'redux-saga/effects';

// Api
import { deleteTodo } from '../../api';

// Actions
import { togglerCreatorAction } from '../../../client';
import { deleteTodoAction } from '../../actions';

// Types

import { DeleteTodoActionTypeASYNC } from '../../types';


export function* TodoDelete(action :DeleteTodoActionTypeASYNC) {
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
    try {
        const todoId = action.payload.todoId;
        const isSuccess = yield call(deleteTodo, { todoId });
        if (isSuccess) {
            yield put(deleteTodoAction(todoId));
        }
    } catch (error) {
        console.log(error);
    }
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: false }));
}
