import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { MovieDetails } from '../pages/MovieDetails';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const Movies = lazy(() => import('../pages/Movies'));

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
