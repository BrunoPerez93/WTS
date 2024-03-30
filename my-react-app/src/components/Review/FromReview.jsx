import { useEffect, useState } from "react";
import { getMovies } from '../../helpers/getMovies';
import '../Review/Review.css'
import useForm from "../hooks/useForm";

const FormReview = () => {

  const { formState, onInputChange, onResetForm } = useForm({
    name: '',
    email: '',
    movieSelect: '',
    review: '',
  });

  const { name, email, movieSelect, review } = formState;

  const [movieTitles, setMovieTitles] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies();
      const titles = movies.map(movie => movie.title);
      setMovieTitles(titles);
    };
    fetchMovies();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  return (


    <form onSubmit={handleSubmit} className="formContainer">
      <div className="inputContainer">

        <div className="div-select">
          <label className="label" htmlFor="movieSelect">Seleccione pelicula</label>
          <select
            className="select"
            onChange={onInputChange}
            name="movieSelect"
            value={movieSelect}
            required
          >
            <option value=''>Seleccione...</option>
            {movieTitles.map((title, index) => (
              <option key={index} value={title}>{title}</option>
            ))}

          </select>
        </div>

        <div className="div-input">
          <label className="label" htmlFor="name">Nombre Completo</label>
          <input
            className="input"
            type="text"
            placeholder="Nombre Completo"
            name="name"
            value={name}
            onChange={onInputChange}
            required
          />
        </div>

        <div className="div-input">
          <label className="label" htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onInputChange}
            required
          />
        </div>

        <div className="div-input">
          <label className="label" htmlFor="text">Reseña</label>
          <textarea
            className="textarea"
            type="text"
            placeholder="Reseña"
            name="review"
            value={review}
            onChange={onInputChange}
            required
          />
        </div>

        <div className="buttonContainer">
          <button className="btn">Finalizar</button>
          <button className="btn">Reiniciar</button>

        </div>

      </div>

    </form>

  )
}

export default FormReview;