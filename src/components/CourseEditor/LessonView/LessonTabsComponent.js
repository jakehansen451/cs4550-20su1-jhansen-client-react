import React from 'react';
import { connect } from 'react-redux';
import { create_lesson, set_lessons } from "../../../store/LessonReducer";
import { select_lesson } from "../../../store/SelectedLessonReducer";
import LessonService from "../../../services/LessonService";
import LessonTabComponent from "./LessonTabComponent";
import Utils from '../../../utils/Utils';

class LessonTabsComponent extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.selected_module !== prevProps.selected_module) {
      LessonService.findLessonsForModule(this.props.selected_module._id)
      .then(actualLessons => this.props.loadLessons(actualLessons));
    }
  }

  createLesson = () => {
    const lesson = {
      name: 'New Lesson',
      moduleId: this.props.selected_module._id,
    };
    LessonService.createLesson(this.props.selected_module._id, lesson)
    .then(actualLesson => {
      this.props.addLesson(this.props.selected_module._id, actualLesson);
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
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selected_module: state.selected_module,
  lessons: state.lessons,
  selected_lesson: state.selected_lesson,
});

const mapDispatchToProps = (dispatch) => ({
  loadLessons: (lessons) => dispatch(set_lessons(lessons)),
  addLesson: (moduleId, lesson) => dispatch(create_lesson(moduleId, lesson)),
  selectLesson: (lesson) => dispatch(select_lesson(lesson)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonTabsComponent);