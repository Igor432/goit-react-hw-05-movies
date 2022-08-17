import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      <h1>Movie</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews"> Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Movies;
