import React from 'react';
import { connect } from 'react-redux';
import { create_lesson } from "../../../store/LessonReducer";
import { set_topics } from "../../../store/TopicReducer";
import { select_lesson } from "../../../store/SelectedLessonReducer";
import LessonService from '../../../services/LessonService';
import TopicService from "../../../services/TopicService";
import LessonTabComponent from "./LessonTabComponent";
import Utils from '../../../utils/Utils';
import TopicPillsComponent from "./TopicPills/TopicPillsComponent";

class LessonTabsComponent extends React.Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.selected_module !== prevProps.selected_module) {
      LessonService.findLessonsForModule(this.props.selected_module._id)
      .then(lessons => {
        const newSelectedLesson = lessons.length > 0 ? lessons[0] : {};
        this.props.selectLesson(newSelectedLesson);
      })
    }

    if (this.props.selected_lesson !== prevProps.selected_lesson) {
      TopicService.findTopicsForLesson(this.props.selected_lesson._id)
      .then(actualLessons => this.props.loadTopics(actualLessons));
    }
  }

  createLesson = () => {
    const lesson = {
      name: 'New Lesson',
      moduleId: this.props.selected_module._id,
    };
    LessonService.createLesson(this.props.selected_module._id, lesson)
    .then(actualLesson => {
      this.props.addLesson(actualLesson);
    });
  };

  lessonTab = (lesson, index) => (
    <LessonTabComponent key={index} lesson={lesson} />
  );

  render() {
    return (
        <div>
          <ul className="nav nav-tabs topic-navbar wbdv-lesson-tabs-list">
            {this.props.lessons.map(this.lessonTab)}
            <li className="nav-item">
              <div
                  className="nav-link topic-link wbdv-icon-link wbdv-lesson-add-btn"
                  onClick={() => {
                    if (!(Utils.isEmpty(this.props.selected_module))) {
                      this.createLesson()
                    }
                  }}
              >
                +
              </div>
            </li>
          </ul>
          {!Utils.isEmpty(this.props.selected_lesson) &&
              <TopicPillsComponent
                  topics={this.props.topics.filter(topic =>
                      topic.lessonId === this.props.selected_lesson._id
                  )}
              />
          }
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selected_module: state.selected_module,
  lessons: state.lessons,
  selected_lesson: state.selected_lesson,
  topics: state.topics,
});

const mapDispatchToProps = (dispatch) => ({
  loadTopics: (topics) => dispatch(set_topics(topics)),
  addLesson: (lesson) => dispatch(create_lesson(lesson)),
  selectLesson: (lesson) => dispatch(select_lesson(lesson)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonTabsComponent);