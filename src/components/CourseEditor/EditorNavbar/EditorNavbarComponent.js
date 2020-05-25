import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft} from "@fortawesome/free-solid-svg-icons";
import LessonTabsComponent from "./LessonTabs/LessonTabsComponent";
import '../../../styles.css';
import './EditorNavbarComponent.css';

const EditorNavbarComponet = (props) => {
  return(
      <nav className="navbar navbar-light wbdv-editor-main-navbar">
        <div>
          <Link to="/courses/">
            <FontAwesomeIcon
                className='wbdv-course-editor wbdv-back-btn icon-link'
                icon={faArrowCircleLeft}
            />
          </Link>
          <div className="navbar-brand">{props.title}</div>
        </div>


        <ul className="wbdv-navbar-content navbar-nav mr-auto">
          {props.tabs.map((tab) => LessonTabsComponent({
            tab: tab,
            selected: tab === props.currentTab,
            selectTab: props.selectTab,
          }))}
          <li className="nav-item wbdv-navbar-content-item">
            <button
                className="nav-link icon-link wbdv-btn"
                onClick={props.addTab}
            >
              +
            </button>
          </li>
        </ul>
      </nav>
  )
};

export default EditorNavbarComponet;