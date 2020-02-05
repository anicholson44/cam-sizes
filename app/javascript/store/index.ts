import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import camelize from 'redux-camelize';

import reducer from './reducer';
import epic from './epic';
import { RootEpic } from './types';

export { default as actions } from './actions';

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(camelize(), epicMiddleware)
));

epicMiddleware.run(epic);

export default store;
