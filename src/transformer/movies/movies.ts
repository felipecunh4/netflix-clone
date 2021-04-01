import { IMovieApiRest, TMovieRest } from '../../services/api/types';
import {
  IListMoviesSuccessAction,
  TMoviePreview,
} from '../../store/ducks/movies/actions/types';

export class MoviesTransformer {
  static ApiToApp(movie: TMovieRest): TMoviePreview {
    try {
      const id: TMoviePreview['id'] = movie.id;
      const title: TMoviePreview['title'] = movie.original_name
        ? movie.original_name
        : movie.original_title;
      const poster: TMoviePreview['poster'] = movie.poster_path;

      return {
        id,
        poster,
        title,
      };
    } catch (err) {
      console.log(err);
      throw new Error('Transformer failed to parse `TMovieRest` error.');
    }
  }

  static ApiListMoviesToApp(movies: IMovieApiRest): IListMoviesSuccessAction {
    try {
      const items = movies.results.map((movie) => this.ApiToApp(movie));

      return { items };
    } catch (err) {
      console.log(err);
      throw new Error('Transformer failed to parse `IMovieApiRest` error.');
    }
  }
}
