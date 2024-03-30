import './CarruselItem.css';
import next from '../../assets/Next.png'
import previous from '../../assets/Previous.png'
import star from '../../assets/Star.png'
import review from '../../assets/Review.png'
import trailer from '../../assets/Trailer.png'


const CarruselItem = ({ movie, nextSlide, prevSlide }) => {
  const { title, url, poster, description, rating, images } = movie;

  const handleNextSlide = () => {
    nextSlide();
  };

  const handlePrevSlide = () => {
    prevSlide();
  };

  const openTrailer = () => {
    window.open(url, '_blank');
  }

  return (
    <>
      <div className="containerCarruselItem" >
        {images.map((images, index) => (
          <img
            className="background-image"
            key={index}
            src={images}
          />
        ))}
        <div className='carruselSlides'>

          <div className='ratingContainer'>
            <img src={star} />
            <p> {rating}/10 </p>
            <p>IMDB</p>
          </div>

          <div className='posterContainer'>
            <img className='poster' src={poster} />
          </div>


          <div className='containerDescription'>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <h2 className='titleMobile'>{title}</h2>


          <div className='btnContainer'>
            <button className='btnTrailer' onClick={openTrailer}><img src={trailer} /></button>
            <button className='btnReview'><img src={review} /></button>
          </div>


          <button className='btnNext' onClick={handleNextSlide}><img src={next} /></button>
          <button className='btnPrev' onClick={handlePrevSlide}><img src={previous} /></button>
        </div>
      </div>
    </>
  )
}


export default CarruselItem;