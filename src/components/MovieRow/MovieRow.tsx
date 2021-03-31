import { IMovieRowProps } from './types';
import Image from 'next/image';

import scss from './MovieRow.module.scss';

const MovieRow = (props: IMovieRowProps) => {
  const renderImageRow = () =>
    props.movieCategory.items.map((movie) => (
      <div key={movie.id} className={scss.item}>
        <Image
          width={300}
          height={450}
          className={scss.img}
          alt={movie.original_title}
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        />
      </div>
    ));

  return (
    <div className={scss.container}>
      <h2 className={scss.title}>{props.movieCategory.title}</h2>
      <div className={scss.listContainer}>
        <div className={scss.list}>
          {props.movieCategory.items.length > 0 && renderImageRow()}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
