export interface IListMoviesRequestAction {
  genre: string;
}

export type TMoviePreview = {
  id: number;
  originalTitle: string;
  description: string;
  poster: string;
  banner: string;
  date: string;
  title: string;
  average: number;
};

export interface IListMoviesSuccessAction {
  items: TMoviePreview[];
}
