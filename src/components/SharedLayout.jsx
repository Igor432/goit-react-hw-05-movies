import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import style from './movies.module.css';

const SharedLayout = () => {
  return (
    <div class="header">
      <header>
        <nav className={style.nav}>
          <ul className={style.header_list}>
            <li>
              <Link className={style.list_links} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={style.list_links} to="/movies">
                Movies
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
