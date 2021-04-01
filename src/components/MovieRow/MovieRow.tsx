import { useState } from 'react';
import Image from 'next/image';

import { IMovieRowProps } from './types';

import scss from './MovieRow.module.scss';

import Arrow from './images/arrow.svg';

const MovieRow = (props: IMovieRowProps) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);

    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    const listWidth = props.items.length * 200;

    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 60;
    }

    setScrollX(x);
  };

  const renderImageRow = () =>
    props.items.map((movie) => (
      <div key={movie.id} className={scss.item}>
        <Image
          width={300}
          height={450}
          className={scss.img}
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w300${movie.poster}`}
        />
      </div>
    ));

  return (
    <div className={scss.container}>
      <h2 className={scss.title}>{props.movieCategory}</h2>
      <button type="button" className={scss.back} onClick={handleLeftArrow}>
        <Arrow className={scss.arrowLeft} />
      </button>
      <button type="button" className={scss.ahead} onClick={handleRightArrow}>
        <Arrow className={scss.arrowRight} />
      </button>
      <div className={scss.listContainer}>
        <div
          className={scss.list}
          style={{
            marginLeft: scrollX,
            width: `${props.items.length * 200}px`,
          }}
        >
          {props.items.length > 0 && renderImageRow()}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
