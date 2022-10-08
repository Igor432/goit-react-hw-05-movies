import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from '../components/movies.module.css';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    async function getTrending() {
      const trends = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=335e18ee033f463b61f137f6ef07bd65'
      );
      setTrending(trends.data.results);
    }
    getTrending();
  }, []);

  useEffect(() => {
    setPosters(trending.map(movie => movie.poster_path));
  }, [trending]);

  return (
    <main>
      <h1>Trending Todays</h1>

      <ul className={style.slider_ul}>
        {posters.map(poster => (
          <img
            key={poster}
            className={style.moving_images}
            src={`https://image.tmdb.org/t/p/original/${poster}`}
            alt=""
          />
        ))}
      </ul>

      <ul className={style.trending_list} style={{}}>
        {trending.map(movie => (
          <li className={style.link_item}>
            <Link
              className={style.list_links}
              to={`movies/${movie.id}`}
              key={movie.id}
            >
              <img
                className={style.poster_img}
                key={movie.title}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
              ></img>
              <div className={style.title_div}>
                <p className={style.movie_name}>{movie.title}</p>
                <p className={style.vote}>IMDB: {movie.vote_average}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
