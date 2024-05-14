import { Link } from 'react-router-dom'

export function NavTabs() {

  

  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Public Info</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Update Info</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Recovery password</Link>
        </li>
      </ul>
    </>
  )
}
