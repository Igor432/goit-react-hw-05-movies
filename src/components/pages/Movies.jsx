import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Movies = () => {
  const [movie, setMovie] = useState('');
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (movie === '') {
      return;
    }
    async function findMovie(name) {
      const film = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=335e18ee033f463b61f137f6ef07bd65&language=en-US&page=1&include_adult=false&query=${name}`
      );

      setMovieList(film.data.results);
    }
    findMovie(movie);
  }, [movie]);

  const onSubmit = e => {
    const name = e.target.search.value;
    e.preventDefault();
    console.log(name);
    setMovie(name);
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <form action="search" onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter Name of the movie"
        />
        <button type="submit">Search</button>
      </form>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {movieList.map(film => (
          <li key={film.id}>
            <Link to={`${film.id}`} key={film.id}>
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
