// Saga
import { all, call, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

// Workers
import { TodoDelete, createNewTodo, todoUpdate, todosFetcher } from './Workers';

// Actions
import { SET_TODOS, CREATE_TODO_ASYNC, DELETE_TODO_ASYNC, UPDATE_TODO_ASYNC } from '../types';

function* watcherForTodosFetchAction():SagaIterator {
    yield takeEvery(SET_TODOS, todosFetcher);
}

function* watcherForTodosDeleteAction():SagaIterator {
    yield takeEvery(DELETE_TODO_ASYNC, TodoDelete);
}

function * watcherForTodosCreateAction():SagaIterator {
    yield takeEvery(CREATE_TODO_ASYNC, createNewTodo);
}

function* watcherForTodosUpdateAction():SagaIterator {
    yield takeEvery(UPDATE_TODO_ASYNC, todoUpdate);
}

export function* rootSaga():SagaIterator {
    yield all([
        call(watcherForTodosFetchAction),
        call(watcherForTodosUpdateAction),
        call(watcherForTodosDeleteAction),
        call(watcherForTodosCreateAction),
    ]);
}
