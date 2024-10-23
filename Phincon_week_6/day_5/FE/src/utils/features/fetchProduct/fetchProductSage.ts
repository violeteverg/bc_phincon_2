/* eslint-disable @typescript-eslint/no-explicit-any */
import { put, takeLatest } from "redux-saga/effects";
import {
  fetchDataRequest,
  fetchDataFailure,
  fetchDataSuccess,
} from "./fetchProductSlice";

const BASE_API = import.meta.env.VITE_BASE_API_URL;
console.log(BASE_API);
async function fetchDataFromAPI() {
  const response = await fetch(`${BASE_API}/product/allproduct`, {
    credentials: "include",
  });
  //   console.log("test");

  //   console.log(response, "<<<<");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
}
// console.log(fetchDataFromAPI());

function* fetchDataAPI(): Generator {
  try {
    const response: any = yield fetchDataFromAPI();
    console.log(response, "<<<");
    yield put(fetchDataSuccess(response.data));
  } catch (error: any) {
    yield put(fetchDataFailure(error.message));
  }
}
// console.log(fetchDataAPI);

export default function* dataSaga() {
  yield takeLatest(fetchDataRequest.type, fetchDataAPI);
}
