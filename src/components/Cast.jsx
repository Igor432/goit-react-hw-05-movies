import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NotFound from './NotFound';
import axios from 'axios';
import style from './movies.module.css';

const Cast = () => {
  const id = useOutletContext();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const getCast = async id => {
      try {
        const getActors = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=335e18ee033f463b61f137f6ef07bd65&language=en-US`
        );
        setActors(getActors.data.cast);
      } catch {
        console.log('error');
      } finally {
        console.log('success');
      }
    };

    getCast(id);
  }, [id]);

  if (actors.length === 0) {
   return <NotFound />;
  }

  return (
    <div>
      <h1>Cast: </h1>
      <ul className={style.actors_list}>
        {actors
          .filter(actor => actor.profile_path !== null)
          .slice(0, 10)
          .map(actor => (
            <li key={actor.name} className={style.actors_items}>
              <img
                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                alt=""
                className={style.cast_images}
              />
              <p>{actor.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;

/*


*/
