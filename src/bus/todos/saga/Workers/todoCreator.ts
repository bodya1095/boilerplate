// Saga
import { call, put } from 'redux-saga/effects';

// Api
import { createTodo } from '../../api';

// Types
import { CreateTodoActionTypeASYNC, Todo } from '../../types';
// Actions
import { togglerCreatorAction } from '../../../client';
import { setTodoAction } from '../../actions';


export function * createNewTodo (action : CreateTodoActionTypeASYNC) {
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
    try {
        const body = action.payload;
        const Todos: Todo = yield call(createTodo, body);
        yield put(setTodoAction(Todos));
    } catch (error) {
        console.log(error);
    }
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: false }));
}
