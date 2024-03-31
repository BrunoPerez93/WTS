import { useEffect, useRef, useState } from "react";
import React from "react";
import BillboardItem from "./BillboardItem";
import { getMovies } from "../../helpers/getMovies";
import './Billboard.css'
import pop from '../../assets/Popcorn 1.png'


const BillboardGroup = () => {

  const [allMovies, setAllMovies] = useState([]);
  const billboardRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getMovies();
      setAllMovies(moviesData);
    };
    fetchMovies();
  }, []);


  return (
    <div className="billboard-group" id="billboard" ref={billboardRef}>
      <div className="title-cartelera">
        <h2>En cartelera</h2>
      </div>

      <div className="containerPop">
        <img className="pops" src={pop} alt="Pop"/>
      </div>

      <div className="scroll-container">
        {allMovies.length > 0 && (
          allMovies.map(movie => (
            <BillboardItem
              key={movie.title}
              movie={movie}
            />
          ))
        )}
      </div>
    </div>
  )
};


export default BillboardGroup;
