export type TMoviePreview = {
  id: number;
  title: string;
  poster: string;
};

export interface IListMoviesSuccessAction {
  items: TMoviePreview[];
}

export interface IListGenreMoviesSuccessAction {
  action: TMoviePreview[];
  comedy: TMoviePreview[];
  horror: TMoviePreview[];
  romance: TMoviePreview[];
  documentary: TMoviePreview[];
}

export enum EMoviePlatform {
  TV = 'tv',
  MOVIE = 'movie',
}

export interface IFindMovieInfoRequestAction {
  movieId: number;
  platform: EMoviePlatform;
}

export interface IFindMovieInfoRequestAction {
  movieId: number;
  platform: EMoviePlatform;
}

export interface IFindMovieInfoSuccessAction {
  id: number;
  date: string;
  description: string;
  genres: string[];
  banner: string;
  title: string;
  average: number;
  totalSeasons: number;
}
