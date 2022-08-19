import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import '../components/pages/styles.css';

const SharedLayout = () => {
  return (
    <div class="header">
      <header>
        <nav
          style={{
            marginBottom: '40px',
          }}
        >
          <ul
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '40px',
              listStyle: 'none',
              fontSize: '22px',
              textDecoration: 'none',
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
