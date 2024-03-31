import { useEffect, useRef, useState } from 'react';
import { getMovies } from '../../helpers/getMovies';
import CarruselItem from './CarruselItem';
import React from 'react';

const CarruselGroup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carruselRef = useRef(null);
  const [featuredMovies, setFeaturedMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getMovies();
      const featured = moviesData.filter(movie => movie.featured);
      setFeaturedMovies(featured);
    };
    fetchMovies();
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === featuredMovies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? featuredMovies.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="carrusel" ref={carruselRef}>
      {featuredMovies.length > 0 && (
        <CarruselItem
          movie={featuredMovies[currentIndex]}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      )}
    </div>
  );
};

export default CarruselGroup;