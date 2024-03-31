import FormReview from './FromReview';
import './Review.css'

const Review = () => {
  return (
    <div className="reviewContainer">

      <div className="title-cotainer">
        <h1>Reseña de peliculas</h1>
        <p>Deja tu opinion</p>
      </div>

      <FormReview />

    </div>
  )
}

export default Review;