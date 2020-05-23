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
        Registration
      </Link>
      <br/>
      <Link to='/profile'>
        Profile
      </Link>
      <br/>
      <Link to='/editor'>
        Course Editor
      </Link>
      <br/>
    </div>;

export default HomeComponent