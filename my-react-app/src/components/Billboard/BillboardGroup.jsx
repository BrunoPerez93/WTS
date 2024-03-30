import { useEffect, useState } from "react";
import BillboardItem from "./BillboardItem";
import { getMovies } from "../../helpers/getMovies";


const BillboardGroup = () => {

  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getMovies();
      setAllMovies(moviesData);
    };
    fetchMovies();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.titleCartelera}>
        <h2>En cartelera</h2>
      </div>


      {allMovies.length > 0 && (
        allMovies.map(movie => (
          <BillboardItem
            key={movie.title}
            movie={movie}
          />
        ))
      )}


    </div>
  )
}

const styles = {
  titleCartelera: {
    color: '#ffff',
    width: '100%',
    padding: '5%',
    fontSize: '30px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default BillboardGroup;