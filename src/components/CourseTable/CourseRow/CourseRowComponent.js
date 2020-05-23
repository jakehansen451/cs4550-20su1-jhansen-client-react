import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import courseService from '../../../services/CourseService'

export default class CourseRowComponent extends React.Component {
  state = {
    editing: false,
    course: this.props.course
  };

  setEditing = (editing) =>
      this.setState({editing: editing});

  ok = () =>
      courseService.updateCourse(
          this.state.course._id,
          this.state.course)
      .then(status => this.setEditing(false));

  updateCourseTitle = (newTitle) =>
      this.setState(prevState => ({
        course: {
          ...prevState.course,
          title: newTitle
        }
      }));

  courseName = () =>
      this.state.editing ?
          <input
              className="form-control"
              onChange={(event) => this.updateCourseTitle(event.target.value)}
              value={this.state.course.title}/> :
          <Link to={`/editor/${this.state.course._id}`}>
            {this.state.course.title}
          </Link>;

  render() {
    return(
        <tr>
          <td className="course-table-icon-row">
            <Link to={`/editor/${this.state.course._id}`} >
              <FontAwesomeIcon
                  className="icon-link"
                  icon={faEdit}
              />
            </Link>
          </td>
          <td>{this.courseName()}</td>
          <td>{this.state.course.owner}</td>
          <td>{this.state.course.modified}</td>
          <td>
            <button
                className="float-right btn red-btn wbdv-row wbdv-button wbdv-delete"
                onClick={() => this.props.deleteCourse(this.props.course)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </td>
        </tr>
    )
  }
}

/*
<tr className={this.state.editing ? 'table-primary' : ''}>
          <td>
            {
              !this.state.editing &&
              <button
                  className="btn btn-primary"
                  onClick={() => this.setEditing(true)}>
                Edit
              </button>
            }
            {
              this.state.editing &&
              <span>
              <button onClick={this.ok}>
                Ok</button>
            </span>
            }
          </td>
        </tr>
 */