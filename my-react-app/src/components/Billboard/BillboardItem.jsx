import './Billboard.css'

const BillboardItem = ({ movie }) => {
  const { title, poster } = movie;

  return (
    <div className="billboard-item">
      <div className="content">
        <div className="title">
          {title}
        </div>
        <div className="poster-container">
          <img className="image" src={poster} alt="Poster" />
        </div>
        <button className="button" >
          Comprar Ticket
        </button>
      </div>
    </div>
  )

}

export default BillboardItem;