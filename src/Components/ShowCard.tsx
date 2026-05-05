import { FC } from "react";
import { Link } from "react-router-dom";
import Show from "./../models/Shows";

const placeholder = "https://images.pexels.com/photos/29243214/pexels-photo-29243214.jpeg";

interface Showcard {
  show: Show;
}

const stripHtml = (value?: string | null) =>
  (value || "").replace(/<[^>]*>/g, "").trim();

const ShowCard: FC<Showcard> = ({ show }) => {
  const summary = stripHtml(show.summary) || "No summary available.";
  const showName = show.name || "Untitled show";

  return (
    <article className="w-full max-w-xs overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={show.image?.medium || placeholder}
        alt={showName}
        className="h-72 w-full object-cover object-center"
      />

      <div className="flex min-h-[260px] flex-col justify-between p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            {showName}
          </h2>

          <p className="h-24 overflow-hidden text-sm leading-6 text-slate-600">
            {summary}
          </p>
        </div>

        <Link
          to={`/show/${show.id}`}
          className="flex w-full items-center justify-center rounded-xl bg-blue-600 p-3 font-semibold tracking-wide text-white transition hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </article>
  );
};

export default ShowCard;
