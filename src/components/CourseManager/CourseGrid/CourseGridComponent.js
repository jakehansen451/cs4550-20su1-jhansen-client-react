import React from "react";
import courseService from "../../../services/CourseService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import CourseCardComponent from './CourseCard/CourseCardComponent';
import './CourseGridComponent.css';

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
      .then(theActualNewCourse => {
        this.props.refreshCourses();
        this.setState({newCourseTitle: ''});
      });
    } else {
      alert('New course title cannot be empty.');
    }
  };

  sortIcon = () => <FontAwesomeIcon
      className='wbdv-sort-icon'
      icon={this.props.sort.includes('desc') ? faSortDown : faSortUp}
  />;

  render() {
    return(
        <div className='wbdv-grid-container'>
          <div className='wbdv-title-bar wbdv-course-grid-header'>
            <h2>Courses</h2>
            <form className="wbdv-add-course-chunk">
              <input
                  className="wbdv-field wbdv-new-course"
                  id="add-course-title"
                  type="text"
                  onChange={(event) => this.setState({
                    newCourseTitle: event.target.value
                  })}
                  value={this.state.newCourseTitle}
                  placeholder="Add a course"
                  title="Add the title of the new course"
              />
              <div className="wbdv-button wbdv-add-course wbdv-icon-link"
                   onClick={ () => this.addCourse(this.state.newCourseTitle) }
              >+</div>
            </form>
          </div>
          <div className='wbdv-grid-sort-bar'>
            <div className='wbdv-sort-button-row'>
              <div
                  className='wbdv-sort-button'
                  onClick={this.props.sortTitle}
              >
                Title
                {this.props.sort.includes('title') ? this.sortIcon() : null}
              </div>
              <div
                  className='wbdv-sort-button'
                  onClick={this.props.sortOwner}
              >
                Owner
                {this.props.sort.includes('owner') ? this.sortIcon() : null}
              </div>
              <div
                  className='wbdv-sort-button'
                  onClick={this.props.sortDate}
              >
                Modified
                {this.props.sort.includes('date') ? this.sortIcon() : null}
                </div>
            </div>
            <div className='wbdv-table-btn-block'>
              <div className='wbdv-table-btn-label'>
                List view:
              </div>
              <div className='wbdv-table-btn'>
                {this.props.tableButton}
              </div>
            </div>
          </div>
          <div className='wbdv-class-grid'>
            {this.props.courses.map(course =>
                <CourseCardComponent
                    refreshCourses={this.props.refreshCourses}
                    deleteCourse={this.props.deleteCourse}
                    key={course._id}
                    course={course}
                />
            )}
          </div>
        </div>
    )
  }
}