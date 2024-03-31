import { useRef } from 'react';
import FormReview from './FromReview';
import './Review.css'
import popBasket from '../../assets/Popcorn.png'
import pop from '../../assets/Popcorn 1.png'


const Review = () => {
  const reviewRef = useRef(null);

  return (
    <div className="reviewContainer" id="review" ref={reviewRef}>

      <div className="title-cotainer">
        <h1>Reseña de peliculas</h1>
        <p>Deja tu opinion</p>
      </div>

      <div className='popBasketContainer'>
        <img className='popBasket' src={popBasket} />
      </div>

      <div className='popContainer'>
        <img className='pop' src={pop} />
      </div>



      <FormReview />

    </div>
  )
}

export default Review;