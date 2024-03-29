export const getMovies = async () => {
  const url = `https://raw.githubusercontent.com/wtuydev/test-json/main/films.json`;
  const resp = await fetch(url);
  const moviesData = await resp.json();

  const movies = moviesData.map(movie => ({
    title: movie.title,
    url: movie.url,
    poster: movie.poster,
    rating: movie.rating,
    images: movie.images,
    featured: movie.featured,
  }));
  return movies;
}