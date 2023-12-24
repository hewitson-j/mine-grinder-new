import { Link } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-page-content">
        <h2>Error</h2>
        <p>
          You have come to the wrong part of the website.
          <br />
          Run, before he catches you...
        </p>
        <Link to={"/"} title="Home">
          <button>Back to Safety</button>
        </Link>
      </div>
    </div>
  );
}
