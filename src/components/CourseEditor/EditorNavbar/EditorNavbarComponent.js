import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft} from "@fortawesome/free-solid-svg-icons";
import LessonTabsComponent from "./LessonTabs/LessonTabsComponent";
import '../../../styles.css';
import './EditorNavbarComponent.css';
import {select_module} from "../../../store/SelectedModuleReducer";
import {select_topic} from "../../../store/SelectedTopicReducer";
import {select_lesson} from "../../../store/SelectedLessonReducer";
import {set_modules} from "../../../store/ModuleReducer";
import {set_lessons} from "../../../store/LessonReducer";
import {set_topics} from "../../../store/TopicReducer";

class EditorNavbarComponent extends React.Component {
  lessonTabsComponent = (tab, index) => (
    <LessonTabsComponent
        key={index}
        tab={tab}
        selected={this.props.currentTab}
        selectTab={this.props.selectTab}
    />
  );

  render() {
    return(
        <nav className="navbar navbar-light wbdv-editor-main-navbar">
          <div>
            <Link to="/courses/" onClick={() => {
              this.props.clearSelectedModule();
              this.props.clearSelectedLesson();
              this.props.clearSelectedTopic();
              this.props.clearModules();
              this.props.clearLessons();
              this.props.clearTopics();
            }}>
              <FontAwesomeIcon
                  className='wbdv-course-editor wbdv-back-btn wbdv-icon-link'
                  icon={faArrowCircleLeft}
              />
            </Link>
            <div className="navbar-brand">
              {this.props.title}
            </div>
          </div>


          <ul className="wbdv-navbar-content navbar-nav">
            {this.props.tabs.map(this.lessonTabsComponent)}
            <li className="nav-item wbdv-navbar-content-item">
              <button
                  className="nav-link wbdv-icon-link wbdv-btn"
                  onClick={this.props.addTab}
              >
                +
              </button>
            </li>
          </ul>
        </nav>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  clearSelectedModule: () => dispatch(select_module({})),
  clearSelectedLesson: () => dispatch(select_lesson({})),
  clearSelectedTopic: () => dispatch(select_topic({})),
  clearModules: () => dispatch(set_modules([])),
  clearLessons: () => dispatch(set_lessons([])),
  clearTopics: () => dispatch(set_topics([])),
});

export default connect(null, mapDispatchToProps)(EditorNavbarComponent);