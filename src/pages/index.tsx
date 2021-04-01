import { END } from 'redux-saga';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { EMovieTypes } from './types';
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
      originals: state.movies.originals,
      trending: state.movies.trending,
      topRated: state.movies.topRated,
      genres: state.movies.genres,
      info: state.movies.info,
    }),
    shallowEqual
  );

const Home = () => {
  const store = useRootStore();
  const dispatch = useDispatch();

  const [bgHeader, setBgHeader] = useState(false);

  useEffect(() => {
    if (store.originals.items.length > 0) {
      const originals = store.originals.items;
      const randomOriginal = Math.floor(Math.random() * originals.length);
      const highlight = originals[randomOriginal];

      dispatch(
        MoviesActions.findMovieInfo.request({
          movieId: highlight.id,
          platform: EMoviePlatform.TV,
        })
      );
    }
  }, [store.originals, dispatch]);

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
      <section className={scss.lists}>
        <MovieRow
          movieCategory={EMovieTypes.ORIGINALS}
          items={store.originals.items}
        />
        <MovieRow
          movieCategory={EMovieTypes.TREDING}
          items={store.trending.items}
        />
        <MovieRow
          movieCategory={EMovieTypes.TOP_RATED}
          items={store.topRated.items}
        />
        <MovieRow
          movieCategory={EMovieTypes.ACTION}
          items={store.genres.action}
        />
        <MovieRow
          movieCategory={EMovieTypes.COMEDY}
          items={store.genres.comedy}
        />
        <MovieRow
          movieCategory={EMovieTypes.HORROR}
          items={store.genres.horror}
        />
        <MovieRow
          movieCategory={EMovieTypes.ROMANCE}
          items={store.genres.romance}
        />
        <MovieRow
          movieCategory={EMovieTypes.DOCUMENTARY}
          items={store.genres.documentary}
        />
      </section>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async ({ store }) => {
    store.dispatch(MoviesActions.listOriginalsMovies.request());
    store.dispatch(MoviesActions.listTrendingMovies.request());
    store.dispatch(MoviesActions.listTopRatedMovies.request());
    store.dispatch(MoviesActions.listGenresMovies.request());

    store.dispatch(END);
    await (store as SagaStore).sagaTask?.toPromise();

    return {
      revalidate: 60 * 6,
    };
  }
);

export default Home;
