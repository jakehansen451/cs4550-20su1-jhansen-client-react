import React from "react";
import {Link} from "react-router-dom";
import './HomeComponent.css';

const HomeComponent = () =>
    <div>
      <div className='title-bar'>
        <h1>
          Whiteboard
        </h1>
      </div>
      <Link to='/table/courses'>
        Browse course offerings
      </Link>
      <br/>
      <Link to='/login'>
        Login
      </Link>
      <br/>
      <Link to='/register'>
        Need an account? Register here
      </Link>
      <br/>
      <Link to='/profile'>
        View your profile
      </Link>
      <br/>
      <Link to='/editor'>
        Edit courses
      </Link>
      <br/>
    </div>;

export default HomeComponent