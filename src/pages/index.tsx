import { useEffect, useState } from 'react';

import { getHomeList, getMovie } from '../services/data';
import { IMovieList, TMovieInfo } from '../services/types';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MovieRow from '../components/MovieRow/MovieRow';
import HighlightMovie from '../components/HighlightMovie/HighlightMovie';

import scss from './index.module.scss';
import Loading from '../components/Loading/Loading';

export default function Home() {
  const [movieList, setMovieList] = useState<IMovieList[]>([]);
  const [highlightData, setHighlightData] = useState<TMovieInfo | null>(null);
  const [bgHeader, setBgHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getHomeList();
      setMovieList(list);

      const originals = list.filter((item) => item.slug === 'originals');
      const randomOriginal = Math.floor(
        Math.random() * originals[0].items.length
      );
      const highlight = originals[0].items[randomOriginal];
      const highlightInfo = await getMovie(highlight.id, 'tv');
      setHighlightData(highlightInfo);
    };

    loadAll();
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

  const renderMovieList = () =>
    movieList.map((movie) => <MovieRow key={movie.id} movieCategory={movie} />);

  return (
    <div className={scss.container}>
      <Header bgBlack={bgHeader} />
      {movieList.length <= 0 && <Loading />}
      {highlightData && <HighlightMovie movie={highlightData} />}
      <section className={scss.lists}>{renderMovieList()}</section>
      <Footer />
    </div>
  );
}
