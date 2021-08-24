import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authContext = useContext(AuthContext);

  const isLoggedIn = authContext.isLoggedIn;

  const logoutHandle = () => {
    authContext.logout();
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandle}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
