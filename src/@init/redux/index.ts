// Core
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Reducers
import { togglersReducer as togglers } from '../../bus/client';
import { todosReducer as todos } from '../../bus/todos/reducer';

// Middlewares
import { middlewares } from './middlewares';
import { sagaMiddleWare } from './middlewares';

// Saga
import { rootSaga } from '../../bus/todos/saga/saga';

export const rootReducer = combineReducers({
    togglers,
    todos,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleWare.run(rootSaga);
