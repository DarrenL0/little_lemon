import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="errorPage" role="main" aria-labelledby="error-title">
      <div className="errorContainer">
        <h1 id="error-title">404</h1>
        <h2>Page Not Found</h2>
        <p className="text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link 
          to="/" 
          className="button-primary errorButton" 
          aria-label="Return to the homepage"
          role="button"
        >
          Return to Home
        </Link>
      </div>
    </section>
  );
};

export default Error404;