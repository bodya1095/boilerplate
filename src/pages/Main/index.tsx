// Core
import React, { FC, useRef, useState } from 'react';

// Components
import { ErrorBoundary, Todo } from '../../components';

// Api
import { useTodosQuery } from '../../bus/todos';

// Redux
import { useTogglersRedux } from '../../bus/client/togglers';
import { useDispatch } from 'react-redux';

// Elements
import { Button, Spinner } from '../../elements';

// Styles
import { Container, Header } from './styles';
// Actions
import { createTodoSagaAction, deleteTodoSagaAction, updateTodoSagaAction } from '../../bus/todos/actions';

const Main: FC = () => {
    const [ text, setText ] = useState<string>('');
    const headerRef = useRef<HTMLElement>(null);
    const { togglersRedux: { isOnline }} = useTogglersRedux();
    const { data, loading } = useTodosQuery();

    const dispatch = useDispatch();
    if (data.length === 0 || loading) {
        return <Spinner />;
    }

    const onCreate = () => {
        if (text !== '') {
            dispatch(createTodoSagaAction({ body: { text }}));
            setText('');
        }
    };

    return (
        <Container>
            {false && <Spinner absolute />}
            <Header ref = { headerRef }>
                <nav />
                <input
                    value = { text }
                    onChange = { (event) => void setText(event.target.value) }
                />
                <nav>
                    <Button
                        disabled = { !isOnline }
                        title = 'Create TODO'
                        onClick = { onCreate }>
                        CREATE
                    </Button>
                </nav>
            </Header>
            <main>
                {
                    data.map((todo, index) => (
                        <Todo
                            isColor = { Boolean(index % 2) }
                            key = { todo.id }
                            { ...todo }
                            deleteHandler = { () => void dispatch(deleteTodoSagaAction({ todoId: todo.id })) }
                            updateHandler = { () => void dispatch(updateTodoSagaAction({
                                todoId: todo.id,
                                body:   { isCompleted: !todo.isCompleted },
                            })) }
                        />
                    ))
                }
            </main>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
