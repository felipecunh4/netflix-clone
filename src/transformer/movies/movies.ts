import {
  IMovieApiRest,
  TMovieInfoRest,
  TMovieRest,
} from '../../services/api/types';
import {
  IFindMovieInfoSuccessAction,
  IListMoviesSuccessAction,
  TMoviePreview,
} from '../../store/ducks/movies/actions/types';
import { EMovieTypes, movieTypeData } from '../../store/ducks/movies/types';

export class MoviesTransformer {
  static ApiToApp(movie: TMovieRest, movieType: EMovieTypes): TMoviePreview {
    try {
      const id: TMoviePreview['id'] = movie.id;
      const title: TMoviePreview['title'] = movie.original_name
        ? movie.original_name
        : movie.original_title;
      const poster: TMoviePreview['poster'] = movie.poster_path;

      const typeFiltered = movieTypeData.filter(
        (type) => type.kind === movieType
      )[0];
      const type: TMoviePreview['type'] = typeFiltered.title;

      return {
        id,
        poster,
        title,
        type,
      };
    } catch (err) {
      console.log(err);
      throw new Error('Transformer failed to parse `TMovieRest` error.');
    }
  }

  static ApiListMoviesToApp(
    movies: IMovieApiRest,
    movieType: EMovieTypes
  ): IListMoviesSuccessAction {
    try {
      const items = movies.results.map((movie) =>
        this.ApiToApp(movie, movieType)
      );

      return { items };
    } catch (err) {
      console.log(err);
      throw new Error('Transformer failed to parse `IMovieApiRest` error.');
    }
  }

  static ApiFindMovieInfoToApp(
    movie: TMovieInfoRest
  ): IFindMovieInfoSuccessAction {
    try {
      const id = movie.id;
      const title = movie.original_name;
      const description = movie.overview;
      const average = movie.vote_average;
      const totalSeasons = movie.number_of_seasons;
      const date = movie.first_air_date;
      const banner = movie.backdrop_path;
      const genres = movie.genres.map((genre) => genre.name);

      return {
        id,
        title,
        description,
        average,
        totalSeasons,
        date,
        banner,
        genres,
      };
    } catch (err) {
      console.log(err);
      throw new Error('Transformer failed to parse `TMovieInfoRest` error.');
    }
  }
}
