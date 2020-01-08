import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composedEnhancers(applyMiddleware(thunk)),
);

export default store;
