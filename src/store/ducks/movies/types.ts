export enum MoviesTypes {
  LIST_MOVIES_REQUEST = '@movies/LIST_MOVIES_REQUEST',
  LIST_MOVIES_SUCCESS = '@movies/LIST_MOVIES_SUCCESS',
  LIST_MOVIES_FAILURE = '@movies/LIST_MOVIES_FAILURE',

  FIND_MOVIE_INFO_REQUEST = '@movies/FIND_MOVIE_INFO_REQUEST',
  FIND_MOVIE_INFO_SUCCESS = '@movies/FIND_MOVIE_INFO_SUCCESS',
  FIND_MOVIE_INFO_FAILURE = '@movies/FIND_MOVIE_INFO_FAILURE',
}

export enum EMovieKindRequest {
  ACTION = 28,
  COMEDY = 35,
  HORROR = 27,
  ROMANCE = 10749,
  DOCUMENTARY = 99,
}

export enum EMovieTypes {
  ORIGINALS = 'ORIGINALS',
  TREDING = 'TREDING',
  TOP_RATED = 'TOP_RATED',
  ACTION = 'ACTION',
  COMEDY = 'COMEDY',
  HORROR = 'HORROR',
  ROMANCE = 'ROMANCE',
  DOCUMENTARY = 'DOCUMENTARY',
}

export enum EMovieTitle {
  ORIGINALS = 'Originais do Netflix',
  TREDING = 'Recomendados para Você',
  TOP_RATED = 'Em Alta',
  ACTION = 'Ação',
  COMEDY = 'Comédia',
  HORROR = 'Terror',
  ROMANCE = 'Romance',
  DOCUMENTARY = 'Documentário',
}

interface IMovieTypeData {
  title: string;
  kind: EMovieTypes;
}

export const movieTypeData: IMovieTypeData[] = [
  { title: EMovieTitle.ORIGINALS, kind: EMovieTypes.ORIGINALS },
  { title: EMovieTitle.TREDING, kind: EMovieTypes.TREDING },
  { title: EMovieTitle.TOP_RATED, kind: EMovieTypes.TOP_RATED },
  { title: EMovieTitle.ACTION, kind: EMovieTypes.ACTION },
  { title: EMovieTitle.COMEDY, kind: EMovieTypes.COMEDY },
  { title: EMovieTitle.HORROR, kind: EMovieTypes.HORROR },
  { title: EMovieTitle.ROMANCE, kind: EMovieTypes.ROMANCE },
  { title: EMovieTitle.DOCUMENTARY, kind: EMovieTypes.DOCUMENTARY },
];
