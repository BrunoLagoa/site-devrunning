import { all, takeLatest, put } from "redux-saga/effects";

import ActionCreator, { Types } from "../actionCreators";
import { getRuns, createRun, removeRun } from "./runs";
import { auth, login, destroyAuth, updateProfile, createProfile } from "./auth";
import { getUsers, getUser, removeUser, updateUser } from "./users";

import Api from "../../service/Api";

export default function* rootSaga() {
  const devURL = "http://localhost:3001";
  const prodURL = "http://api.site.com.br";

  const baseURL = process.env.NODE_ENV === "development" ? devURL : prodURL;
  const api = new Api(baseURL);

  yield all([
    takeLatest(Types.SIGNIN_REQUEST, login({ api })),
    takeLatest(Types.AUTH_REQUEST, auth({ api })),
    takeLatest(Types.GET_RUNS_REQUEST, getRuns({ api })),
    takeLatest(Types.CREATE_RUN_REQUEST, createRun({ api })),
    takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth),
    takeLatest(Types.UPDATE_PROFILE_REQUEST, updateProfile({ api })),
    takeLatest(Types.CREATE_PROFILE_REQUEST, createProfile({ api })),
    takeLatest(Types.REMOVE_RUN_REQUEST, removeRun({ api })),
    takeLatest(Types.GET_USERS_REQUEST, getUsers({ api })),
    takeLatest(Types.REMOVE_USER_REQUEST, removeUser({ api })),
    takeLatest(Types.GET_USER_REQUEST, getUser({ api })),
    takeLatest(Types.UPDATE_USER_REQUEST, updateUser({ api })),

    put(ActionCreator.authRequest())
  ]);
}
