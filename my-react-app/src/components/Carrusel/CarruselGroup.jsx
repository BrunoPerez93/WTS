import { useEffect, useState } from 'react';
import { getMovies } from '../../helpers/getMovies';
import CarruselItem from './CarruselItem';

const CarruselGroup = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getMovies();
      setAllMovies(moviesData);
    };
    fetchMovies();
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === allMovies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? allMovies.length - 1 : prevIndex - 1
    );
  };


  return (
    <>
      {allMovies.length > 0 && (
        <CarruselItem
          movie={allMovies[currentIndex]}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      )}
    </>
  );
};

export default CarruselGroup;