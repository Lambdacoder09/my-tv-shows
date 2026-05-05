import { normalize, schema } from "normalizr";
import { produce } from "immer";
import Show from "../models/Shows";
import {
  SET_SHOWS_LOADED,
  SET_SHOWS_QUERY,
  type ShowsAction,
} from "../Actions/shows";

const showSchema = new schema.Entity("shows");

// Define State type
export type State = {
  show: { [showId: number]: Show };
  ids: number[];
  query: string;
};

// Initial state
export const initialState: State = {
  show: {},
  ids: [],
  query: "",
};

// Reducer function (auto named from file)
function fetchShowsReducer(
  state = initialState,
  action: ShowsAction
): State {
  switch (action.type) {
    case SET_SHOWS_QUERY:
      return produce(state, (draft) => {
        draft.query = action.payload.query;
      });

    case SET_SHOWS_LOADED:
      return produce(state, (draft) => {
        const shows = action.payload.shows as Show[];
        const query = action.payload.query as string;
        const normalizedData = normalize(shows, [showSchema]);

        draft.show = (normalizedData.entities.shows || {}) as State["show"];
        draft.ids = (normalizedData.result as number[]) || [];
        draft.query = query;
      });

    default:
      return state;
  }
}

export default fetchShowsReducer;
