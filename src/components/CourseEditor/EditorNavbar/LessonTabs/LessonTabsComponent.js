import React from "react";
import '../../../../styles.css';
import './LessonTabsComponent.css';

const LessonTabsComponent = (props) => {
  return (
      <li
          className={props.selected
              ? "nav-item wbdv-navbar-content-item wbdv-selected-tab"
              : "nav-item wbdv-navbar-content-item"}
          onClick={() => props.selectTab(props.tab)}
      >
        <button className="nav-link wbdv-btn">
          {props.tab}
        </button>
      </li>
  );
};

export default LessonTabsComponent;