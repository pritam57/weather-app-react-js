import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./rootreducer";
import createSagaMiddleware from 'redux-saga';
import productSaga from "./productsaga";

// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();


const store= configureStore({
   reducer:rootreducer,
   middleware:()=>[sagaMiddleware]
})

sagaMiddleware.run(productSaga)


export default store;