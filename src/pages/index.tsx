import { END } from 'redux-saga';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {
  EMovieKindRequest,
  EMovieTypes,
  EMovieTitle,
} from '../store/ducks/movies/types';
import { SagaStore, wrapper } from '../store';
import { RootState } from '../interfaces/rootState';
import { MoviesActions } from '../store/ducks/movies/actions/actions';
import { EMoviePlatform } from '../store/ducks/movies/actions/types';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';
import MovieRow from '../components/MovieRow/MovieRow';
import HighlightMovie from '../components/HighlightMovie/HighlightMovie';

import scss from './index.module.scss';

const useRootStore = () =>
  useSelector(
    (state: RootState) => ({
      info: state.movies.info,
      movies: state.movies.data,
    }),
    shallowEqual
  );

const Home = () => {
  const store = useRootStore();
  const dispatch = useDispatch();

  const [bgHeader, setBgHeader] = useState(false);

  const renderMovieRows = () => {
    return Object.values(EMovieTitle).map((type) => {
      const moviesFiltered = store.movies.items.filter(
        (movie) => movie.type === type
      );

      return (
        <MovieRow key={type} movieCategory={type} items={moviesFiltered} />
      );
    });
  };

  useEffect(() => {
    if (store.movies.items.length > 0) {
      const movies = store.movies.items;
      const originals = movies.filter(
        (movie) => movie.type === EMovieTitle.ORIGINALS
      );
      const randomOriginal = Math.floor(Math.random() * originals.length);
      const highlight = originals[randomOriginal];

      dispatch(
        MoviesActions.findMovieInfo.request({
          movieId: highlight.id,
          platform: EMoviePlatform.TV,
        })
      );
    }
  }, [store.movies, dispatch]);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBgHeader(true);
      } else {
        setBgHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className={scss.container}>
      <Header bgBlack={bgHeader} />
      <Loading load={store.info.loading} />
      {!store.info.loading && <HighlightMovie movie={store.info} />}
      <section className={scss.lists}>{renderMovieRows()}</section>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async ({ store }) => {
    store.dispatch(
      MoviesActions.listMovies.request({
        searchType: EMovieTypes.ORIGINALS,
      })
    );

    store.dispatch(
      MoviesActions.listMovies.request({
        searchType: EMovieTypes.TREDING,
      })
    );

    store.dispatch(
      MoviesActions.listMovies.request({
        searchType: EMovieTypes.TOP_RATED,
      })
    );

    store.dispatch(
      MoviesActions.listMovies.request({
        searchType: EMovieTypes.ACTION,
        genreId: EMovieKindRequest.ACTION,
      })
    );

    store.dispatch(
      MoviesActions.listMovies.request({
        searchType: EMovieTypes.COMEDY,
        genreId: EMovieKindRequest.COMEDY,
      })
    );

    store.dispatch(
      MoviesActions.listMovies.request({
        searchType: EMovieTypes.HORROR,
        genreId: EMovieKindRequest.HORROR,
      })
    );

    store.dispatch(
      MoviesActions.listMovies.request({
        searchType: EMovieTypes.ROMANCE,
        genreId: EMovieKindRequest.ROMANCE,
      })
    );

    store.dispatch(
      MoviesActions.listMovies.request({
        searchType: EMovieTypes.DOCUMENTARY,
        genreId: EMovieKindRequest.DOCUMENTARY,
      })
    );

    store.dispatch(END);
    await (store as SagaStore).sagaTask?.toPromise();

    return {
      revalidate: 60 * 6,
    };
  }
);

export default Home;
