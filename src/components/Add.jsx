import { Link } from "react-router-dom";

function Add() {
  return (
    <div className="page">
      <h1>Add Page</h1>

      <input type="text" placeholder="Enter title" />

      <br />
      <br />

      <Link to="/" className="button">
        ← Back
      </Link>
    </div>
  );
}

export default Add;