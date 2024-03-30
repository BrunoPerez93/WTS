import { useEffect, useState } from 'react';
import { getMovies } from '../../helpers/getMovies';
import CarruselItem from './CarruselItem';

const CarruselGroup = () => {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getMovies();
      setAllMovies(moviesData);
    };
    fetchMovies();
  }, []);

  return (
    <>
      {allMovies.map(movie => (
        <CarruselItem
          key={movie.id}
          title={movie.title}
          url={movie.url}
          poster={movie.poster}
          rating={movie.rating}
          images={movie.images}
          description={movie.description}
          featured={movie.featured}
        />
      ))}
    </>
  );
};

export default CarruselGroup;