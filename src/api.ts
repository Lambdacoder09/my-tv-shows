import axios from "axios";
import Show from "./models/Shows";

interface ShowSearchResult {
  show: Show;
}

export async function FetchShows(keyword: string): Promise<Show[]> {
  const response = await axios.get<ShowSearchResult[]>(
    `https://api.tvmaze.com/search/shows?q=${keyword}`
  );

  return response.data.map((item) => ({
    ...item.show,
    genres: item.show.genres || [],
    summary: item.show.summary || "",
    image: item.show.image || null,
    rating: item.show.rating || { average: null },
    externals: item.show.externals || { imdb: null },
  }));
}
