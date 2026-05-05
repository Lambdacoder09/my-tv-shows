// Import required functions from redux
import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
  type StoreEnhancer,
} from "redux";
import fetchShowsReducer from "./reducers/FetchShows";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { watchShows } from "./sagas/Shows";
const SagaMiddleware = createSagaMiddleware();
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

function* rootsaga(): Generator {
  yield all([watchShows()]);
}
// Step 1: Combine all reducers
// Add your reducers inside this object
const reducer = combineReducers({
  // example: user: userReducer,
  shows: fetchShowsReducer,
});

// Step 2: Create the store using the combined reducer
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer: StoreEnhancer = composeEnhancers(
  applyMiddleware(SagaMiddleware)
);
const store = createStore(reducer, undefined, enhancer);

// Step 3: Create a type for the global state (TypeScript)
export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export type State = RootState;
SagaMiddleware.run(rootsaga);
// Step 4: Export the store to use in your app
export default store;
