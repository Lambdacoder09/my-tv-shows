import { createSelector } from "reselect";
import type Show from "../models/Shows";
import type { RootState } from "../store";
import { initialState } from "../reducers/FetchShows";

const showsStateSelector = (state: RootState) => state.shows || initialState;

export const showsQuerySelector = createSelector(
  showsStateSelector,
  (showState) => showState.query
);

export const showsMapSelector = createSelector(
  showsStateSelector,
  (showState) => showState.show
);

export const showsIdsSelector = createSelector(
  showsStateSelector,
  (showState) => showState.ids
);

export const showsSelector = createSelector(
  [showsMapSelector, showsIdsSelector],
  (showsMap, showIds) =>
    showIds.filter((showId) => Boolean(showsMap[showId])).map(
      (showId) => showsMap[showId]
    ) as Show[]
);
