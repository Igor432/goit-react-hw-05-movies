import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../pages/styles.css';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function getTrending() {
      const trends = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=335e18ee033f463b61f137f6ef07bd65'
      );
      setTrending(trends.data.results);
    }
    getTrending();
  });

  return (
    <main>
      <h1>Trending Todays</h1>
      <img src="https://via.placeholder.com/960x240" alt="" />

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
