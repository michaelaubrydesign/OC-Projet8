import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      <span>404</span>
      <h2>Oops! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="error__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
