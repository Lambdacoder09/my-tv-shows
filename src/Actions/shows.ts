import Show from "../models/Shows";

export const SET_SHOWS_QUERY = "shows/setQuery";
export const SET_SHOWS_LOADED = "shows/setLoaded";

export type SetShowsQueryAction = {
  type: typeof SET_SHOWS_QUERY;
  payload: { query: string };
};

export type SetShowsLoadedAction = {
  type: typeof SET_SHOWS_LOADED;
  payload: { shows: Show[]; query: string };
};

export type ShowsAction = SetShowsQueryAction | SetShowsLoadedAction;

export const setShowsQuery = (query: string): SetShowsQueryAction => ({
  type: SET_SHOWS_QUERY,
  payload: { query },
});

export const setShowsLoaded = (
  shows: Show[],
  query: string
): SetShowsLoadedAction => ({
  type: SET_SHOWS_LOADED,
  payload: { shows, query },
});
