import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav} aria-label="Navigation principale">
    <Link to="/" className={styles.brand}>TOEIC</Link>
    <div className={styles.links}>
      <NavLink to="/"            end className={({ isActive }) => isActive ? styles.active : undefined}>Accueil</NavLink>
      <NavLink to="/test-blanc"      className={({ isActive }) => isActive ? styles.active : undefined}>Test blanc</NavLink>
      <NavLink to="/flashcards"      className={({ isActive }) => isActive ? styles.active : undefined}>Vocab</NavLink>
      <NavLink to="/stats"           className={({ isActive }) => isActive ? styles.active : undefined}>Stats</NavLink>
    </div>
  </nav>
);

export default Navbar;
