import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export type IApplicationState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const store: Store<IApplicationState> = createStore(
  rootReducer,
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(sagaMiddleware)
    : composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
