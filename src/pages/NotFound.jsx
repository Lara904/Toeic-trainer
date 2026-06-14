import { Link } from 'react-router-dom';

const NotFound = () => (
  <section>
    <h1>Page introuvable</h1>
    <p>La page que tu cherches n'existe pas.</p>
    <Link to="/">Retour à l'accueil</Link>
  </section>
);

export default NotFound;
