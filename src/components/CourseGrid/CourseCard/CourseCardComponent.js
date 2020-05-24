import React from 'react';
import courseService from "../../../services/CourseService";
import DateUtils from "../../../utils/DateUtils";
import './CourseCardComponent.css';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPencilAlt,
  faTimes,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

export default class CourseCardComponent extends React.Component {
  state = {
    editing: false,
    course: this.props.course,
    newCourseTitle: this.props.course.title,
  };

  componentDidUpdate = () => {
    if (this.state.course !== this.props.course) {
      this.setState({
        ...this.sate,
        course: this.props.course
      })
    }
  };

  setEditing = (editing) =>
      this.setState({editing: editing});

  saveCourseCard = () =>
      courseService.updateCourse(
          this.state.course._id,
          {...this.state.course,
            title: this.state.newCourseTitle,
            modified: (new Date()).toISOString()
          })
      .then(status => {
        this.setEditing(false);
        this.props.refreshCourses();
      });

  courseName = () =>
      this.state.editing ?
          <input
              className="wbdv-field course-name-input"
              onChange={(event) => this.setState({
                newCourseTitle: event.target.value
              })}
              value={this.state.newCourseTitle}/> :
          <Link className='icon-link' to={`/editor/${this.state.course._id}`}>
            {this.state.course.title}
          </Link>;

  render() {
    return (
        <div className='grid-item'>
          <div className='card-preview'>
            <div className='preview-text'>
              Preview
            </div>
          </div>
          <div className='card-edit-block'>
            <div className='name-block'>
              {this.courseName()}
            </div>
            <div className='modified-info'>
              Modified:&nbsp;
              {DateUtils.toShortLocalDateTime(this.props.course.modified)}
            </div>
            <div className='card-btn-row'>
              {
                this.state.editing ?
                    <button
                        className="wbdv-button green-btn card-btn"
                        onClick={this.saveCourseCard}
                    >
                      <FontAwesomeIcon icon={faCheck}/>
                    </button> :
                    <button
                        className={"wbdv-button green-btn card-btn"}
                        onClick={() => this.setEditing(true)}
                    >
                      <FontAwesomeIcon icon={faPencilAlt}/>
                    </button>
              }
              {
                this.state.editing ?
                    <button
                        className='float-right red-btn wbdv-button wbdv-delete card-btn'
                        onClick={() => this.setEditing(false)}
                    >
                      <FontAwesomeIcon icon={faTimes}/>
                    </button> :
                    <button
                        className="float-right red-btn wbdv-button wbdv-delete card-btn"
                        onClick={() => this.props.deleteCourse(this.props.course)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
              }
            </div>
          </div>
        </div>
    )};
}