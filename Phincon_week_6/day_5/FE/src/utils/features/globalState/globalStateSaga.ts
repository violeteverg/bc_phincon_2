import { takeLatest, put, takeEvery } from "redux-saga/effects";
import {
  openModal,
  closeModal,
  requestDelete,
  cancelDelete,
} from "./globalStateSlice";

// Saga for opening the modal
function* handleOpenModal() {
  yield put(openModal());
}

// Saga for closing the modal
function* handleCloseModal() {
  yield put(closeModal());
}

// Saga for confirming delete action
function* handleRequestDelete() {
  yield put(requestDelete());
}

// Saga for canceling delete action
function* handleCancelDelete() {
  yield put(cancelDelete());
}

export function* modalSaga() {
  yield takeEvery("modal/openModal", handleOpenModal);
  yield takeLatest("modal/closeModal", handleCloseModal);
  yield takeLatest("modal/requestDelete", handleRequestDelete);
  yield takeLatest("modal/cancelDelete", handleCancelDelete);
}
