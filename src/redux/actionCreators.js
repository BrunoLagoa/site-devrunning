import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
  signinRequest: ["email", "passwd"],
  signinSuccess: ["user"],
  signinFailure: ["error"],

  authRequest: null,
  authSuccess: ["user"],
  authFailure: null,

  destroyAuthRequest: null,
  destroyAuthSuccess: null,

  getRunsRequest: ["admin"],
  getRunsSuccess: ["runs"],
  getRunsFailure: null,

  createRunRequest: ["run"],
  createRunSuccess: ["run"],
  createRunFailure: ["error"],
  createRunReset: null,

  updateProfileRequest: ["user"],
  updateProfileSuccess: ["user"],
  updateProfileFailure: ["error"],
  updateProfileReset: null,

  createProfileRequest: ["user"],
  createProfileSuccess: ["user"],
  createProfileFailure: ["error"],
  createProfileReset: null,

  removeRunRequest: ["id"],
  removeRunSuccess: ["id"],
  removeRunFailure: ["error"],

  getUserRequest: ["id"],
  getUserSuccess: ["user"],
  getUserFailure: null,

  getUsersRequest: null,
  getUsersSuccess: ["users"],
  getUsersFailure: null,

  removeUserRequest: ["id"],
  removeUserSuccess: ["id"],
  removeUserFailure: ["error"],

  updateUserRequest: ["user"],
  updateUserSuccess: ["user"],
  updateUserFailure: ["error"],
  updateUserReset: null
});

export default Creators;
