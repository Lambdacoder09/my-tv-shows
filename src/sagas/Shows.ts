import { call, put, takeLatest } from "redux-saga/effects";
import {
  SET_SHOWS_QUERY,
  setShowsLoaded,
  type SetShowsQueryAction,
} from "../Actions/shows";
import { FetchShows as fetchShowsApi } from "../api";
import type Show from "../models/Shows";

export function* fetchShowsWorker(
  action: SetShowsQueryAction
): Generator<unknown, void, Show[]> {
  const shows = yield call(fetchShowsApi, action.payload.query);
  yield put(setShowsLoaded(shows, action.payload.query));
}

export function* watchShows(): Generator {
  yield takeLatest(SET_SHOWS_QUERY, fetchShowsWorker);
}
