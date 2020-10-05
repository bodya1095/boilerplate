//  Saga
import { put, call } from 'redux-saga/effects';

// Api
import { fetchTodos } from '../../api/index';

// Actions
import { togglerCreatorAction } from '../../../client';
import { setTodosAction } from '../../actions';

// Types
import { Todos } from '../../types';
export function * todosFetcher() {
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
    try {
        const Todos:Todos = yield call(fetchTodos);
        yield put(setTodosAction(Todos));
    } catch (error) { console.log(error); }
    yield put(togglerCreatorAction({ type: 'isTodosFetching', value: false }));
}
