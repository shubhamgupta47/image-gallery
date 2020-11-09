import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import photosReducer from "../reducers/photos";
import errorsReducer from "../reducers/errors";
import uploadReducer from "../reducers/upload";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    gallery: photosReducer,
    errors: errorsReducer,
    uploadSuccess: uploadReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;
