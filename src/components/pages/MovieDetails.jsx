import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams('');
  const [movie, setMovie] = useState([]);
  const [actors, setActors] = useState();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    if (id === '') {
      return;
    }

    const movieDetails = async () => {
      const filmDetail = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=335e18ee033f463b61f137f6ef07bd65&language=en-US`
      );
      setMovie(filmDetail.data);
    };
    movieDetails();
  }, [id]);

  useEffect(() => {
    const getCast = async () => {
      const getActors = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=335e18ee033f463b61f137f6ef07bd65&language=en-US`
      );
      setActors(getActors.data.cast);
    };

    getCast();
  }, [id]);

  useEffect(() => {
    const getReviews = async () => {
      const reviews = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=335e18ee033f463b61f137f6ef07bd65&language=en-US&page=1`
      );
      setReviews(reviews.data);
    };
    getReviews();
  }, [id]);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
        width="340"
        height="auto"
      />
      <h1>Movie: {movie.title}</h1>
      <h3>Genres: {movie.genre_ids}</h3>
      <h3>Overview: </h3>
      <p>{movie.overview}</p>
      <h2>Additional Information:</h2>
      <ul>
        <li>
          <Link to="cast">Cast:</Link>
        </li>

        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet context={[actors, reviews]} />
    </div>
  );
};
