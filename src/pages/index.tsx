import { useEffect, useState } from 'react';

import { getHomeList, getMovie } from '../services/data';
import { IMovieList, TMovieInfo } from '../services/types';

import MovieRow from '../components/MovieRow/MovieRow';
import HighlightMovie from '../components/HighlightMovie/HighlightMovie';

import scss from './index.module.scss';

export default function Home() {
  const [movieList, setMovieList] = useState<IMovieList[]>([]);
  const [highlightData, setHighlightData] = useState<TMovieInfo | null>(null);

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
      console.log(highlightInfo);
      setHighlightData(highlightInfo);
    };

    console.log('passou aqui');
    loadAll();
  }, []);

  const renderMovieList = () =>
    movieList.map((movie) => <MovieRow key={movie.id} movieCategory={movie} />);

  return (
    <div className={scss.container}>
      {highlightData && <HighlightMovie movie={highlightData} />}
      <section className={scss.lists}>{renderMovieList()}</section>
    </div>
  );
}
