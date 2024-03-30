export const getMovies = async () => {
  const url = `https://raw.githubusercontent.com/wtuydev/test-json/main/films.json`;
  const resp = await fetch(url);
  const data = await resp.json();

  const movies = data.movies.map(movie => ({
    title: movie.title,
    url: movie.url,
    description: movie.description,
    poster: movie.poster,
    rating: movie.rating,
    images: movie.images,
    featured: movie.featured,
  }));
  return movies;
}