import { rest } from '..';
import { EMoviePlatform } from '../../store/ducks/movies/actions/types';
import { IMovieApiRest, TMovieInfoRest } from './types';

export class MovieRest {
  static listOriginals = async () => {
    const { data } = await rest.get<IMovieApiRest>(
      `/discover/tv?with_network=213&language=pt-Br&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    return data;
  };

  static listTrending = async () => {
    const { data } = await rest.get<IMovieApiRest>(
      `/trending/all/week?language=pt-Br&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    return data;
  };

  static listTopRated = async () => {
    const { data } = await rest.get<IMovieApiRest>(
      `/movie/top_rated?language=pt-Br&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    return data;
  };

  static listGenres = async (genreId: number) => {
    const { data } = await rest.get<IMovieApiRest>(
      `/discover/movie?with_genres=${genreId}&language=pt-Br&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    return data;
  };

  static findMovieInfo = async (movieId: number, platform: EMoviePlatform) => {
    console.log(movieId);
    console.log(platform);
    const { data } = await rest.get<TMovieInfoRest>(
      `/${platform}/${movieId}?language=pt-Br&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    return data;
  };
}
