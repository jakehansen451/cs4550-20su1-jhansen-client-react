import React from 'react';
import {Link} from "react-router-dom";
import './WIPComponent.css';

const WIPComponent = () => {
  return(
      <div className="wbdv-wip-block">
        <h1>
          Whoops!
        </h1>
        <div>
          The page you're looking for hasn't been implemented yet.
        </div>
        <Link
            to='/'
        >
          Back to home
        </Link>
      </div>
  )
};

export default WIPComponent;