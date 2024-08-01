// rrd imports
import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  if (error.status == 404) {
    return (
      <div className="error-container container">
        <div>
          <img
            style={{ width: "700px" }}
            src="https://cdn.dribbble.com/users/724182/screenshots/8587099/media/ef86c4bf895b58c47d1b353eabecad01.gif"
            alt="Page not found"
          />
          <Link to="/" className="btn">
            You can go home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="error-container container">
      <div>
        <img
          style={{ width: "400px" }}
          src="https://media.tenor.com/eDchk3srtycAAAAi/piffle-error.gif"
          alt="Page not found"
        />
        <Link to="/" className="btn">
          You can go home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
