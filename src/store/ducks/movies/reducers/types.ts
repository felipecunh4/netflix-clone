import { IListMoviesSuccessAction } from '../actions/types';

export interface IMoviesState extends IListMoviesSuccessAction {
  error: boolean;
  loading: boolean;
}
