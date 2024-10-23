// import { put, takeLatest } from "redux-saga/effects";
// import {
//   fetchCookieRequest,
//   fetchCookieSuccess,
//   fetchCookieFailure,
// } from "./authSlice";

// const BASE_API = import.meta.env.VITE_BASE_API_URL;

// async function fetchCookieData() {
//   const response = await fetch(`${BASE_API}/api/auth/check-cookies`, {
//     credentials: "include",
//   });
//   console.log(response, "<<<<<<");
//   if (!response.ok) {
//     throw new Error("Failed to fetch cookie data");
//   }
//   return await response.json();
// }

// function* fetchCookieAPI(): Generator {
//   try {
//     const response = yield fetchCookieData();
//     console.log(response.data.token, "<<response");
//     yield put(fetchCookieSuccess(response.data.token));
//   } catch (error) {
//     yield put(fetchCookieFailure(error));
//   }
// }

// export default function* authSaga() {
//   yield takeLatest(fetchCookieRequest.type, fetchCookieAPI);
// }
