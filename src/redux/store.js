import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import {test} from "./reducers";
import rootSaga from "./sagas";
import counter from "./reducers/counter";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    devTools: true,
    reducer: {
        test: test,
        counter: counter,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store;