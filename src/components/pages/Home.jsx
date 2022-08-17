import axios from 'axios';
import { useState, useEffect, useContext } from 'react';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending();
  }, []);

  async function getTrending() {
    const trends = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=335e18ee033f463b61f137f6ef07bd65'
    );
    setTrending(trends.data.results);
    console.log(trending);
  }

  return (
    <main>
      <h1>Trending Todays</h1>
      <img src="https://via.placeholder.com/960x240" alt="" />

      <ul>
        {trending.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
