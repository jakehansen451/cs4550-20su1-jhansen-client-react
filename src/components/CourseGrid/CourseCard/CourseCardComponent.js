import React from 'react';
import courseService from "../../../services/CourseService";
import DateUtils from "../../../utils/DateUtils";

export default class CourseCardComponent {
  state = {
    editing: false,
    course: this.props.course
  };

  setEditing = (editing) =>
      this.setState({editing: editing});

  saveCourseCard = () =>
      courseService.updateCourse(
          this.state.course._id,
          {...this.state.course,
            modified: (new Date()).toISOString()
          })
      .then(status => {
        this.setEditing(false);
        courseService.findCourseById(this.state.course._id)
        .then((actualCourse) => this.setState(
            {...this.state,
              course: {
                ...actualCourse,
                modified: DateUtils.toLocalDateTime(actualCourse.modified)
              }
            }))
      });

  updateCourseTitle = (newTitle) =>
      this.setState(prevState => ({
        course: {
          ...prevState.course,
          title: newTitle
        }
      }));

  render() {
    return (
        <div>
          <h1>Course card</h1>
        </div>
    )};
}