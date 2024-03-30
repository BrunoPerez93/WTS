
const BillboardItem = ({ movie }) => {
  const { title, poster } = movie;

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.title}>
          {title}
        </div>
        <div style={styles.posterContainer}>
          <img style={styles.image} src={poster} alt="Poster" />
        </div>
        <button style={styles.button} >
          Comprar Ticket
        </button>
      </div>
    </div>
  )

}

const styles = {
  container: {
    display: 'flex',
    margin: '10px',
    maxWidth: '300px',

  },
  content: {
    heigth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {
    maxWidth: '300px',
    width: '100%',
  },
  button: {
    maxWidth: '300px',
    width: '100%',
    backgroundColor: '#554F95',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    padding: '10px',
    color: '#ffff',
    marginTop: '0px',
    border: 'none',
  },
  title: {
    maxWidth: '300px',
    marginBottom: '10px',
    color: '#ffff'

  }

}

export default BillboardItem;