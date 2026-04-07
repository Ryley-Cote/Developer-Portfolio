import { Link }  from "react-dom";

export const NotFound = () => {
    return (
        <div>
      <h1>404</h1>
      <p>That page doesn’t exist.</p>
      <Link className="btn" to="/">
        Back home
      </Link>
    </div>
    )
}