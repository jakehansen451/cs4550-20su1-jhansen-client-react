import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPencilAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import courseService from '../../../../services/CourseService';
import './CourseRowComponent.css';

export default class CourseRowComponent extends React.Component {
  state = {
    editing: false,
    course: this.props.course,
    newCourseTitle: this.props.course.title,
  };

  componentDidUpdate = () => {
    if (this.state.course !== this.props.course) {
      this.setState({course: this.props.course})
    }
  };

  setEditing = (editing) =>
      this.setState({...this.state, editing: editing, newCourseTitle: this.state.course.title});

  saveCourseRow = () =>
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
              className="wbdv-field wbdv-course-name-input"
              onChange={(event) => this.setState({
                newCourseTitle: event.target.value
              })}
              value={this.state.newCourseTitle}/> :
          <Link className='wbdv-icon-link' to={`/editor/${this.state.course._id}`}>
            {this.state.course.title}
          </Link>;

  render() {
    return(
        <tr className={this.state.editing ? 'wbdv-highlighted' : ''}>
          <td>
            <Link to={`/editor/${this.state.course._id}`} >
              <FontAwesomeIcon
                  className="wbdv-icon-link"
                  icon={faEdit}
              />
            </Link>
          </td>
          <td className="wbdv-title">{this.courseName()}</td>
          <td className="wbdv-owner">{this.state.course.owner}</td>
          <td className="wbdv-last-modified">{this.state.course.modified}</td>
          <td className="wbdv-button-row">
            {
              this.state.editing ?
                  <button
                      className="wbdv-button wbdv-green-btn"
                      onClick={this.saveCourseRow}
                  >
                    <FontAwesomeIcon icon={faCheck}/>
                  </button> :
                  <button
                      className={"wbdv-button wbdv-green-btn"}
                      onClick={() => this.setEditing(true)}
                  >
                    <FontAwesomeIcon icon={faPencilAlt}/>
                  </button>
            }
            {
              this.state.editing ?
                  <button
                    className='float-right wbdv-red-btn wbdv-button wbdv-delete'
                    onClick={() => this.setEditing(false)}
                  >
                    <FontAwesomeIcon icon={faTimes}/>
                  </button> :
                  <button
                      className="float-right wbdv-red-btn wbdv-button wbdv-delete"
                      onClick={() => this.props.deleteCourse(this.props.course)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
            }
          </td>
        </tr>
    )
  }
}