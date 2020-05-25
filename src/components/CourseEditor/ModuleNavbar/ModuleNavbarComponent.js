import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft} from "@fortawesome/free-solid-svg-icons";
import '../../../styles.css';
import './ModuleNavbarComponent.css';

const ModuleNavbarComponet = (props) => {
  return(
      <nav className="navbar navbar-light wbdv-editor-main-navbar">
        <div>
          <Link to="/courses/">
            <FontAwesomeIcon
                className='wbdv-course-editor wbdv-exit-editor-btn icon-link'
                icon={faArrowCircleLeft}
            />
          </Link>
          <div className="navbar-brand">{props.title}</div>
        </div>

        <ul className="wbdv-navbar-content navbar-nav mr-auto">
          <li className="nav-item wbdv-navbar-content-item active">
            <button className="nav-link wbdv-btn" aria-disabled="true">Pages</button>
          </li>

          <li className="nav-item wbdv-navbar-content-item">
            <button className="nav-link icon-link wbdv-btn" aria-disabled="true">+</button>
          </li>
        </ul>
      </nav>
  )
};

export default ModuleNavbarComponet;