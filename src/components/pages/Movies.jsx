import { Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      <h1>Movie Search</h1>
      <ul></ul>
      <Outlet />
    </div>
  );
};

export default Movies;
