import React from 'react';
import {connect} from 'react-redux';
import { select_lesson } from "../../../store/SelectedLessonReducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faCheck, faTrash, faTimes} from '@fortawesome/free-solid-svg-icons';
import './LessonTabComponent.css';
import LessonService from "../../../services/LessonService";
import {delete_lesson, update_lesson} from "../../../store/LessonReducer";

class LessonTabComponent extends React.Component {
  state = {
    editing: false,
    newLessonName: this.props.lesson.name
  };
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state === prevState
    && (this.state.newLessonName !== this.props.lesson.name)) {
      this.setState({newLessonName: this.props.lesson.name})
    }
  }

  toggleEditing = () => {
    this.setState({editing: !this.state.editing})
  };

  saveEdit = () => {
    if (this.state.newLessonName !== this.props.lesson.name) {
      const newLesson = {...this.props.lesson, name: this.state.newLessonName};
      LessonService.updateLesson(this.props.lesson._id, newLesson)
      .then(actualLesson => this.props.updateLesson(newLesson));
    }
    this.toggleEditing();
  };

  removeLesson = () => {
    LessonService.deleteLesson(this.props.lesson._id)
    .then(response => this.props.removeLesson(this.props.lesson._id))
  };

  render() {
    return (
        <li
            key={this.props.key}
            className="nav-item"
            onClick={() => this.props.selectLesson(this.props.lesson)}
        >
          <div className={this.props.selected_lesson._id === this.props.lesson._id
              ? "nav-link wbdv-lesson-pill active lesson-selected"
              : "nav-link wbdv-lesson-pill"
          }
          >
            {this.state.editing ?
                <div>
                  <input
                      className="wbdv-field wbdv-lesson-name-input"
                      onChange={(event) => this.setState({
                        newLessonName: event.target.value
                      })}
                      value={this.state.newLessonName}/>
                  <FontAwesomeIcon
                      className='wbdv-icon-link wbdv-lesson-btn'
                      icon={faCheck}
                      onClick={this.saveEdit}
                  />
                  <FontAwesomeIcon
                      className='wbdv-icon-link wbdv-lesson-btn wbdv-delete-btn'
                      icon={faTimes}
                      onClick={this.toggleEditing}
                  />
                  <FontAwesomeIcon
                      className='wbdv-icon-link wbdv-lesson-btn wbdv-delete-btn'
                      icon={faTrash}
                      onClick={this.removeLesson}
                  />
                </div>
                :
                <div>
                  {this.props.lesson.name}
                  <FontAwesomeIcon
                      className='wbdv-icon-link wbdv-lesson-btn'
                      icon={faEdit}
                      onClick={this.toggleEditing}
                  />
                </div>
            }
          </div>
        </li>
    )
  }
}

const mapStateToProps = (state) => ({
  selected_lesson: state.selected_lesson
});

const mapDispatchToProps = (dispatch) => ({
  selectLesson: (lesson) => dispatch(select_lesson(lesson)),
  removeLesson: (lesson) => dispatch(delete_lesson(lesson)),
  updateLesson: (lesson) => dispatch(update_lesson(lesson)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LessonTabComponent);