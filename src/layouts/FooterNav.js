import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#features">Features</Link>
        </li>

        <li>
          <Link to="/#team">Team</Link>
        </li>

        <li>
          <a
            rel="noopener noreferrer"
            href="https://master.d21x7jmmbknvuw.amplifyapp.com/"
            target="_blank"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
