import { basicFetch, getMovieInfo } from './index';

export const getHomeList = async () => {
  return [
    {
      id: 1,
      slug: 'originals',
      title: 'Originais do Netflix',
      items: await basicFetch(
        `/discover/tv?with_network=213&language=pt-Br&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      ),
    },
    {
      id: 2,
      slug: 'trending',
      title: 'Recomendados para Voce',
      items: await basicFetch(
        `/trending/all/week?language=pt-Br&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      ),
    },
    {
      id: 3,
      slug: 'toprated',
      title: 'Em Alta',
      items: await basicFetch(
        `/movie/top_rated?language=pt-Br&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      ),
    },
    {
      id: 4,
      slug: 'action',
      title: 'Acao',
      items: await basicFetch(
        `/discover/movie?with_genres=28&language=pt-Br&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      ),
    },
    {
      id: 5,
      slug: 'comedy',
      title: 'Comedia',
      items: await basicFetch(
        `/discover/movie?with_genres=35&language=pt-Br&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      ),
    },
    {
      id: 6,
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch(
        `/discover/movie?with_genres=27&language=pt-Br&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      ),
    },
    {
      id: 7,
      slug: 'romance',
      title: 'Romance',
      items: await basicFetch(
        `/discover/movie?with_genres=10749&language=pt-Br&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      ),
    },
    {
      id: 8,
      slug: 'documentary',
      title: 'Documentarios',
      items: await basicFetch(
        `/discover/movie?with_genres=99&language=pt-Br&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      ),
    },
  ];
};

export const getMovie = async (movieId: number, type: string) => {
  const info = await getMovieInfo(
    `/${type}/${movieId}?language=pt-Br&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  return info;
};
