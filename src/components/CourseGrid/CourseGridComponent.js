import React from "react";
import courseService from "../../services/CourseService";

export default class CourseGridComponent extends React.Component {
  state = {
    newCourseTitle: '',
  };

  addCourse = (title) => {
    if (this.state.newCourseTitle !== '') {
      courseService.createCourse({
        title: title,
        owner: 'me',
        modified: (new Date()).toISOString()
      })
      .then(theActualNewCourse => this.props.refreshCourses());
    } else {
      alert('New course title cannot be empty.');
    }
  };

  render() {
    return(
        <h3>Course Grid {this.props.courses.length}</h3>
    )
  }
}