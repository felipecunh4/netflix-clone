import { END } from 'redux-saga';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { EMovieTypes, movieTypes } from './types';
import { SagaStore, wrapper } from '../store';
import { RootState } from '../interfaces/rootState';
import { EMovieKindRequest } from '../store/ducks/movies/types';
import { MoviesActions } from '../store/ducks/movies/actions/actions';

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
    }),
    shallowEqual
  );

const Home = () => {
  const store = useRootStore();
  const dispatch = useDispatch();

  const [bgHeader, setBgHeader] = useState(false);

  const loading =
    store.originals.loading ||
    store.trending.loading ||
    store.topRated.loading ||
    store.genres.loading;

  useEffect(() => {
    const originals = store.originals.items;
    const randomOriginal = Math.floor(Math.random() * originals.length);
    const highlight = originals[randomOriginal];

    // const highlightInfo = await getMovie(highlight.id, 'tv');
  }, []);

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

  // const renderMovieList = () =>
  //   movieTypes.map((type) => {
  //     console.log(type.slug);
  //     // console.log(store[type.slug]);

  //     return (
  //       <MovieRow
  //         key={type.id}
  //         movieCategory={type}
  //         items={store.originals.items}
  //       />
  //     );
  //   });

  return (
    <div className={scss.container}>
      <Header bgBlack={bgHeader} />
      {loading && <Loading />}
      {/* <HighlightMovie movie={highlightData} /> */}
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
    store.dispatch(
      MoviesActions.listGenresMovies.request({
        genre: EMovieKindRequest.GENRES,
      })
    );

    store.dispatch(END);
    await (store as SagaStore).sagaTask?.toPromise();

    return {
      revalidate: 120,
    };
  }
);

export default Home;
