import './CarruselItem.css';
import next from '../../assets/Next.png'
import previous from '../../assets/Previous.png'
import { useState } from 'react';
import star from '../../assets/Star.png'


const CarruselItem = ({ title, url, poster, description, rating, images, featured }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="containerCarruselItem" >
      <div className='carruselSlides'>
        {images.map((images, index) => (
          <img
            key={index}
            src={images}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          />
        ))}
      </div>

      <div className='ratingContainer'>
        <img src={star} />
        <p> {rating}/10 </p>
        <p>IMDB</p>
      </div>


      <img className='poster' src={poster} />


      <div className='containerDescription'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>


      <button className='btnNext' onClick={nextSlide}><img src={next} /></button>
      <button className='btnPrev' onClick={prevSlide}><img src={previous} /></button>
    </div>
  )
}


export default CarruselItem;