import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const initialState = {};
const enhancers = [];
const middleware = [thunk];

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  rootReducers,
  initialState,
  composedEnhancers(applyMiddleware(thunk)),
);

export default store;
