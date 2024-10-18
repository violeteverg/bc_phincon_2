import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cookieReducer from "../utils/features/login/authSlice";

import authSaga from "../utils/features/login/authSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    cookie: cookieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

[authSaga].map((saga) => {
  sagaMiddleware.run(saga);
});
