import { ChangeEvent, FC } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchBarProps {
  query: string;
  onQueryChange: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ query, onQueryChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onQueryChange(event.target.value);
  };

  return (
    <div className="relative">
      <input
        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 pr-12 text-base shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        type="search"
        placeholder="Search TV shows"
        value={query || ""}
        onChange={handleChange}
      />
      <BsSearch className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
    </div>
  );
};

export default SearchBar;
