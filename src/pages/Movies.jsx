import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import style from './styles.module.css';

const Movies = () => {
  const [movie, setMovie] = useState('');
  const [movieList, setMovieList] = useState([]);

  async function findMovie(name) {
    try {
      const film = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=335e18ee033f463b61f137f6ef07bd65&language=en-US&page=1&include_adult=false&query=${name}`
      );
      setMovieList(film.data.results);
    } catch {
      console.log('error');
    } finally {
      console.log(movieList);
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    findMovie(movie);
  };

  const onChange = e => {
    setMovie(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <form action="search" onSubmit={onSubmit} className={style.form}>
        <input
          className={style.search_input}
          type="text"
          name="search"
          placeholder="Enter Name of the movie"
          onChange={onChange}
        />
        <button type="submit" className={style.submit_button}>
          Search
        </button>
      </form>
      <ul className={style.search_list}>
        {movieList.map(film => (
          <li key={film.id}>
            <Link className={style.list_links} to={`${film.id}`} key={film.id}>
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
