import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Fragment>
      <h1>404</h1>
      <p>The page you are looking for does not exist</p>
      <Link to={`/`} className='btn btn-dark btn-sm my-1'>
        Return to home page
      </Link>
    </Fragment>
  );
};

export default NotFound;
