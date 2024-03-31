import { useRef } from 'react';
import FormReview from './FromReview';
import './Review.css'

const Review = () => {
  const reviewRef = useRef(null);

  return (
    <div className="reviewContainer" id="review" ref={reviewRef}>

      <div className="title-cotainer">
        <h1>Reseña de peliculas</h1>
        <p>Deja tu opinion</p>
      </div>

      <FormReview />

    </div>
  )
}

export default Review;