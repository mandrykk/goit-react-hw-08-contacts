import { logOut } from '../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../redux/auth/auth-selectors';
import styles from './UserMenu.module.css';
import { NavLink } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  return (
    <header className={styles.header}>
      <NavLink
        to="/"
        className={styles.homeLink}
      >
        <FavoriteIcon /> {name}!
      </NavLink>
      <ul className={styles.listLink}>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}
          >
            Contacts
          </NavLink>
        </li>
        <li>
          <button className={styles.navLink} type="button" onClick={() => dispatch(logOut())}>
            Sign Out
          </button>
        </li>
      </ul>
    </header>
  );
}