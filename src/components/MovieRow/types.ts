import { TMoviePreview } from '../../store/ducks/movies/actions/types';

export interface IMovieRowProps {
  items: TMoviePreview[];
  movieCategory: string;
}
