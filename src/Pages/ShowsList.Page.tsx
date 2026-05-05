import { FC } from "react";
import { connect } from "react-redux";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import type Show from "../models/Shows";
import { setShowsQuery } from "../Actions/shows";
import type { RootState } from "../store";
import { showsQuerySelector, showsSelector } from "../Selectors/ShowState";

type StateProps = {
  query: string;
  shows: Show[];
};

type DispatchProps = {
  setShowsQuery: (query: string) => void;
};

type Props = StateProps & DispatchProps;

const ShowListPage: FC<Props> = ({
  query,
  shows,
  setShowsQuery,
}) => {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white/80 px-6 py-8 shadow-sm backdrop-blur">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            TV Shows
            </h1>
            <p className="text-sm leading-6 text-slate-600 sm:text-base">
              Search for a show and browse the latest matching results.
            </p>
            <div className="w-full pt-1">
              <SearchBar onQueryChange={setShowsQuery} query={query} />
            </div>
          </div>
        </div>

        {!query.trim() && (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 px-6 py-12 text-center text-slate-600">
            Start typing in the search box to discover shows.
          </div>
        )}

        {query.trim() && shows.length === 0 && (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 px-6 py-12 text-center text-slate-600">
            No shows found for <span className="font-semibold">"{query}"</span>.
          </div>
        )}

        {shows.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shows.map((show) => (
              <div key={show.id} className="flex justify-center">
                <ShowCard show={show} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const mapStateToProps = (state: RootState): StateProps => ({
  query: showsQuerySelector(state),
  shows: showsSelector(state),
});

const mapDispatchToProps: DispatchProps = {
  setShowsQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowListPage);
