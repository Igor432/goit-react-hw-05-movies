import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      <h1>Movie Search</h1>
      <ul>/* return */</ul>
      <Outlet />
    </div>
  );
};

export default Movies;
