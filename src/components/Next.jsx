import { Link } from "react-router-dom";

function Next() {
  return (
    <div className="page">
      <h1>Next Page</h1>

      <p>This is the next page.</p>

      <Link to="/" className="button">
        ← Back
      </Link>
    </div>
  );
}

export default Next;