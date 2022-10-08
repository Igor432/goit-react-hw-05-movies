import { useEffect, useState } from 'react';
import style from '../pages/styles.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams('');
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  const genresList = genres.map(genre => genre.name);

  useEffect(() => {
    async function movieDetails(id) {
      try {
        const filmDetail = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=335e18ee033f463b61f137f6ef07bd65&language=en-US`
        );
        setMovie(filmDetail.data);
        setGenres(filmDetail.data.genres);
      } catch {
        console.log('error');
      } finally {
       console.log('success')
      }
    }
    movieDetails(id);
  }, [id]);


  return (
    <div className={style.movie_details}>
      <div className={style.image_section}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          width="340"
          height="auto"
        />
        <div className={style.info_section}>
          <h1>{movie.title}</h1>
          <h3>Release Date</h3>
          <p>{movie.release_date}</p>
          <h3>Genres:</h3>
          <p>{genresList.join(', ')}</p>
          <h3>Overview: </h3>
          <p>{movie.overview}</p>
        </div>
      </div>

      <h2>Additional Information:</h2>
      <ul className={style.additional_info}>
        <li>
          <Link className={style.list_links} to="cast">
            Cast
          </Link>
        </li>

        <li>
          <Link className={style.list_links} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>

      <div className={style.outlet}><Outlet context={id} /></div>
    </div>
  );
};



