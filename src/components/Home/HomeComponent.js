import React from "react";
import {Link} from "react-router-dom";

const HomeComponent = () =>
    <div>
      <div className='wbdv-title-bar'>
        <h1>
          Whiteboard
        </h1>
      </div>
      <Link to='/courses/table/'>
        Browse course offerings
      </Link>
      <br/>
      <Link to='/login/'>
        Login
      </Link>
      <br/>
      <Link to='/register/'>
        Need an account? Register here
      </Link>
      <br/>
      <Link to='/profile/'>
        View your profile
      </Link>
      <br/>
    </div>;

export default HomeComponent