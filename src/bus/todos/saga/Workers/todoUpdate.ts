// Saga
import { call, put } from 'redux-saga/effects';

// Api
import { updateTodo } from '../../api';

// Actions
import { togglerCreatorAction } from '../../../client';
import { updateTodoAction } from '../../actions';


// Types
import { Todo, UpdateTodoActionTypeASYNC } from '../../types';


export function* todoUpdate(action: UpdateTodoActionTypeASYNC) {
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
    try {
        const { todoId, body } = action.payload;
        const todoItem: Todo = yield call(updateTodo, { todoId, body });
        yield put(updateTodoAction(todoItem));
    } catch (error) {
        console.log(error);
    }
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: false }));
}
