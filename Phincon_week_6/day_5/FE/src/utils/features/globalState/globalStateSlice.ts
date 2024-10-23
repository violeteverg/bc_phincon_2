import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  isDelete: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  isDelete: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
    requestDelete(state) {
      state.isDelete = true;
    },
    cancelDelete(state) {
      state.isDelete = false;
    },
  },
});

export const { openModal, closeModal, requestDelete, cancelDelete } =
  modalSlice.actions;
export default modalSlice.reducer;
