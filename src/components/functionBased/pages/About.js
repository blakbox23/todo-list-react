import React from 'react';
import { Link, useRouteMatch, Route } from 'react-router-dom';
import SinglePage from './SinglePage';

const About = () => {
  console.log(useRouteMatch());
  const { url, path } = useRouteMatch();
  return (
    <div>

      <ul className="aboutPg">
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
      </ul>

      <Route path={`${path}/:slug`}>
        <SinglePage />
      </Route>

    </div>
  );
};
export default About;
