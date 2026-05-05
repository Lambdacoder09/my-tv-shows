export default interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  rating: Rating;
  summary: string;
  externals: Externals;
  image: Image | null;
}

interface Rating {
  average: number | null;
}

interface Externals {
  imdb: string | null;
}

interface Image {
  medium: string;
  original: string;
}