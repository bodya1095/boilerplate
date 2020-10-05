// Middlewares
import { Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import  createSagaMiddleWare  from 'redux-saga';
const isDev = process.env.NODE_ENV === 'development';

const middlewares: Middleware[] = [];
export const sagaMiddleWare = createSagaMiddleWare();

isDev && middlewares.push(
    createLogger({
        duration:  true,
        collapsed: true,
        colors:    {
            title:     () => '#139BFE',
            prevState: () => '#1C5FAF',
            action:    () => '#149945',
            nextState: () => '#A47104',
            error:     () => '#ff0005',
        },
    }),
);
middlewares.push(sagaMiddleWare);


export { middlewares };
