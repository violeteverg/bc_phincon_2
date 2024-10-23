import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import dataReducer from "../utils/features/fetchProduct/fetchProductSlice";
import dataSaga from "../utils/features/fetchProduct/fetchProductSage";
import modalReducer from "../utils/features/globalState/globalStateSlice";
import { modalSaga } from "@/utils/features/globalState/globalStateSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    data: dataReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Jalankan semua saga, termasuk modalSaga
[dataSaga, modalSaga].map((saga) => {
  sagaMiddleware.run(saga);
});
