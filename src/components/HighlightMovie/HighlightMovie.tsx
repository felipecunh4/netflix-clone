import Image from 'next/image';

import { IHighlightMovieProps } from './types';

import scss from './HighlightMovie.module.scss';

const HighlightMovie = (props: IHighlightMovieProps) => {
  const dateAired = new Date(props.movie.date);
  let description = props.movie.description;
  description =
    description.length > 200
      ? description.substring(0, 200) + '...'
      : description;

  return (
    <section className={scss.container}>
      <div className={scss.img}>
        <Image
          src={`https://image.tmdb.org/t/p/original${props.movie.banner}`}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className={scss.verticalShadow}>
        <div className={scss.horizontalShadow} />
      </div>
      <div className={scss.content}>
        <h2 className={scss.title}>{props.movie.title}</h2>
        <div className={scss.info}>
          <div className={scss.points}>{props.movie.average} pontos</div>
          <div className={scss.date}>{dateAired.getFullYear()}</div>
          <div className={scss.seasons}>
            {props.movie.totalSeasons} temporada
            <span>{props.movie.totalSeasons !== 1 && 's'}</span>
          </div>
        </div>

        <div className={scss.description}>{description}</div>

        <div className={scss.buttonsWrapper}>
          <a href={`/watch/${props.movie.id}`} className={scss.watch}>
            ► Assistir
          </a>
          <a href={`/list/add/${props.movie.id}`} className={scss.addToList}>
            + Minha Lista
          </a>
        </div>

        <div className={scss.genres}>
          <strong>Generos: </strong>
          {props.movie.genres.join(', ')}
        </div>
      </div>
    </section>
  );
};

export default HighlightMovie;
