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
  const [genres, setGenres] = useState([]);

  const genresList = genres.map(genre => genre.name);

  useEffect(() => {
    if (id === '') {
      return;
    }

    const movieDetails = async () => {
      const filmDetail = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=335e18ee033f463b61f137f6ef07bd65&language=en-US`
      );
      setMovie(filmDetail.data);
      setGenres(filmDetail.data.genres);
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
      <h1>{movie.title}</h1>
      <h3>Genres:</h3>
      <p>{genresList.join(', ')}</p>
      <h3>Overview: </h3>
      <p>{movie.overview}</p>
      <h2>Additional Information:</h2>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          fontSize: '24px',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <li>
          <Link to="cast">Cast</Link>
        </li>

        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <div
        style={{
          height: '250px',
          backgroundColor: 'white',
          borderTop: '1px grey groove ',
        }}
      >
        <Outlet context={[actors, reviews]} />
      </div>
    </div>
  );
};

/*
  {genresList.map(genre => (
            <li key={genre.name}>{genre.name}</li>
          ))}

*/
