import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../pages/styles.css';

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

      <ul
        class="slider_ul"
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          flexDirection: 'row',
        }}
      >
        {posters.map(poster => (
          <img
            key={poster}
            class="moving_images"
            src={`https://image.tmdb.org/t/p/original/${poster}`}
            alt=""
          />
        ))}
      </ul>

      <ul class="trending_list" style={{}}>
        {trending.map(movie => (
          <Link class="list_links" to={`movies/${movie.id}`} key={movie.id}>
            {movie.title}
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default Home;
