import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { catchError } from 'rxjs/operators';

import {
  fetchUsersEpic,
  fetchBasketsEpic,
  fetchAppleEpic,
  resetApplesEpic,
  clearErrMessageEpic,
} from '../epics/epics';
import rootReducer from './rootReducer';

const rootEpic = (action$, store$, dependencies) => combineEpics(
  fetchUsersEpic,
  fetchBasketsEpic,
  fetchAppleEpic,
  resetApplesEpic,
  clearErrMessageEpic,
)(action$, store$, dependencies).pipe(
  catchError((error, source) => {
    console.error(error);
    return source;
  }),
);

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(epicMiddleware),
));

epicMiddleware.run(rootEpic);

export default store;
