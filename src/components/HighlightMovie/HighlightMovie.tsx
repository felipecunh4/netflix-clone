import Image from 'next/image';

import { IHighlightMovieProps } from './types';

import scss from './HighlightMovie.module.scss';

const HighlightMovie = (props: IHighlightMovieProps) => {
  const dateAired = new Date(props.movie.first_air_date);
  let description = props.movie.overview;
  description =
    description.length > 200
      ? description.substring(0, 200) + '...'
      : description;

  const renderGenres = () => {
    const movie = props.movie;
    const genre = movie.genres.map((item) => item.name);

    return genre.join(', ');
  };

  return (
    <section className={scss.container}>
      <div className={scss.img}>
        <Image
          src={`https://image.tmdb.org/t/p/original${props.movie.backdrop_path}`}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className={scss.verticalShadow}>
        <div className={scss.horizontalShadow} />
      </div>
      <div className={scss.content}>
        <h2 className={scss.title}>{props.movie.original_name}</h2>
        <div className={scss.info}>
          <div className={scss.points}>{props.movie.vote_average} pontos</div>
          <div className={scss.date}>{dateAired.getFullYear()}</div>
          <div className={scss.seasons}>
            {props.movie.number_of_seasons} temporada
            <span>{props.movie.number_of_seasons !== 1 && 's'}</span>
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
          {renderGenres()}
        </div>
      </div>
    </section>
  );
};

export default HighlightMovie;
