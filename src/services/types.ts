export interface IMovieList {
  id: number;
  title: string;
  slug: string;
  items: TMoviePreview[];
}

export type TMoviePreview = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TMovieInfo = {
  backdrop_path: string;
  episode_run_time: number[];
  first_air_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  in_production: boolean;
  last_air_date: string;
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
  };
  status: string;
  tagline: string;
  vote_average: number;
};

export interface IMovieApiRest {
  page: number;
  results: TMoviePreview[];
  total_pages: number;
  total_results: number;
}
