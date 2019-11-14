import { Store, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router'; // react-router replacement
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { ApplicationState, createRootReducer } from './';


export default function configureStore(
    history: History,
): Store<ApplicationState> {

    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
        createRootReducer(history),
        {},
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware,
            logger
        )
    )

    sagaMiddleware.run()
    return store
}
