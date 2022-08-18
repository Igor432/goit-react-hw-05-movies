import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Cast from './Cast';
import Reviews from './Reviews';
import { MovieDetails } from './pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
