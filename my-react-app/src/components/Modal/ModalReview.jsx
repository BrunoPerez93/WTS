import star from '../../assets/Star review.png'
import './ModalReview.css'

const ModalReview = ({ movieTitle, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Reseña de peliculas</h2>
        <h1>!Muchas gracias!</h1>
        <img src={star} alt='Esterlla' />
        <p> Tu reseña sobre la pelicula "{movieTitle}" ha sido enviada.</p>
      </div>
    </div>
  )
}

export default ModalReview;