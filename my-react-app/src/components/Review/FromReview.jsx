import { useEffect, useState } from "react";
import { getMovies } from '../../helpers/getMovies';
import '../Review/Review.css'
import useForm from "../hooks/useForm";
import ModalReview from "../Modal/ModalReview";

const FormReview = () => {

  const { formState, onInputChange, onResetForm } = useForm({
    name: '',
    email: '',
    movieSelect: '',
    review: '',
  });

  const { name, email, movieSelect, review } = formState;

  const [movieTitles, setMovieTitles] = useState([]);
  const [messageError, setMessageError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovieTitle, setSelectedMovieTitle] = useState('');

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
    if (!name || !email || !movieSelect || !review) {
      setMessageError('Todos los campos son obligatorios')
      setTimeout(() => {
        setMessageError('')
      }, 5000)
      return;
    }

    if (name.length < 4) {
      setMessageError('El nombre debe tener al menos 4 caracteres');
      setTimeout(() => {
        setMessageError('');
      }, 5000);
      return;
    }

    if (review.length < 10) {
      setMessageError('La reseña debe tener al menos 10 caracteres');
      setTimeout(() => {
        setMessageError('');
      }, 5000);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessageError('El email no es valido')
      setTimeout(() => {
        setMessageError('')
      }, 5000)
      return;
    }

    setIsModalOpen(true);
    setSelectedMovieTitle(movieSelect);
    onResetForm();
  };

  const handleReset = (event) => {
    event.preventDefault();
    onResetForm();
  }

  const closeModal = () => {
    setIsModalOpen(false);
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
          />
        </div>

        {messageError && (
          <div className="messageError">{messageError} </div>
        )}

        <div className="buttonContainer">
          <button type="submit" className="btn">Finalizar</button>
          <button type="button" onClick={handleReset} className="btn">Reiniciar</button>

        </div>

        {isModalOpen && (
          <ModalReview
            movieTitle={selectedMovieTitle}
            onClose={closeModal}
          />
        )}

      </div>

    </form>

  )
}

export default FormReview;