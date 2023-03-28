import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listLoading: false,
  firstName: "",
  lastName: "",
  actionsLoading: false,
  token: undefined,
  loginUser: null,
  loginUserName: {},
  infos: [],
};
export const callTypes = {
  list: "list",
  action: "action",
};
//State işlemleri için
export const Slice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.payload.err}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
        state.actionsLoading = false;
      } else {
        state.actionsLoading = false;
        state.listLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    loginIdentity: (state, action) => {
      const token = action.payload;
      return { token, user: undefined };
    },
    loginUser: (state, action) => {
      const loginUser = action.payload;
      return { ...state, loginUser, user: undefined };
    },
    updatedUser: (state, action) => {
      const updatedUser = action.payload;
      return { ...state, loginUser: updatedUser, user: undefined };
    },
    registerUser: (state, action) => {
      const registerUser = action.payload;
      return { ...state, registerUser, user: undefined };
    },
    loginUserName: (state, action) => {
      const firstName = action.payload.firstName;
      const lastName = action.payload.lastName;

      return { ...state, firstName, lastName, user: undefined };
    },
    getInfos: (state, action) => {
      state.error = null;
      state.infos = action.payload;
    },

    logOut: (state, action) => {
      return initialState;
    },
  },
});
