import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/rootSaga";
import rootReducer from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
