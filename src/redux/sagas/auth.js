import { put, call } from "redux-saga/effects";
import jwtDecode from "jwt-decode";

import actionCreators from "../actionCreators";

export const login = ({ api }) =>
  function*(action) {
    const login = yield call(api.login, {
      email: action.email,
      passwd: action.passwd
    });

    let token = "";

    if (login.data.token) {
      token = login.data.token;

      // Salva o token no localStorage
      localStorage.setItem("token", token);

      // Descompactar o token
      const user = jwtDecode(token);
      localStorage.setItem("user", user);

      yield put(actionCreators.signinSuccess(user));
    } else {
      yield put(actionCreators.signinFailure(login.data.message));
    }
  };

export const auth = ({ api }) =>
  function*() {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        //const user = jwtDecode(token);
        const user = yield call(api.getUser, "me");
        yield put(actionCreators.authSuccess(user.data));
      } catch (err) {
        yield put(actionCreators.authFailure("invalid token"));
      }
    } else {
      yield put(actionCreators.authFailure("no token"));
    }
  };

export const updateProfile = ({ api }) =>
  function*(action) {
    const userToSave = {
      ...action.user
    };
    yield call(api.updateUser, userToSave);
    yield put(actionCreators.updateProfileSuccess(userToSave));
  };

export const createProfile = ({ api }) =>
  function*(action) {
    const userToSave = {
      ...action.user
    };
    const user = yield call(api.createUser, userToSave);

    if (user && user.data && user.data.error) {
      yield put(actionCreators.createProfileFailure(user.data.message));
    } else {
      yield put(actionCreators.createProfileSuccess(userToSave));
      yield put(
        actionCreators.signinRequest(userToSave.email, userToSave.passwd)
      );
    }
  };

export function* destroyAuth() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  yield put(actionCreators.destroyAuthSuccess());
}
