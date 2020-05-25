import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import CourseRowComponent from "./CourseRow/CourseRowComponent";
import courseService from "../../../services/CourseService";
import '../../../styles.css';
import './CourseTableComponent.css';


export default class CourseTableComponent extends React.Component {
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

  sortIcon = () => <FontAwesomeIcon
      className='wbdv-sort-icon'
      icon={this.props.sort.includes('desc') ? faSortDown : faSortUp}
  />;

  render() {
    return (
        <div className="wbdv-class-table">
          <div className="title-bar wbdv-course-table-header">
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
              <div className="wbdv-button wbdv-add-course icon-link"
                   onClick={ () => this.addCourse(this.state.newCourseTitle) }
              >+</div>
            </form>
          </div>
          <table className="table table-striped wbdv-course-table">
            <thead>
              <tr>
                <th></th>
                <th onClick={this.props.sortTitle}>
                  <div>
                    Title
                    {this.props.sort.includes('title') ? this.sortIcon() : null}
                  </div>
                </th>
                <th onClick={this.props.sortOwner} className="wbdv-owner">
                  <div>
                    Owned By
                    {this.props.sort.includes('owner') ? this.sortIcon() : null}
                  </div>
                </th>
                <th onClick={this.props.sortDate} className="wbdv-last-modified">
                  <div>
                    Modified
                    {this.props.sort.includes('date') ? this.sortIcon() : null}
                  </div>
                </th>
                <th>
                  <div className='wbdv-grid-btn-block'>
                    <div className='wbdv-grid-btn-label'>
                      Grid view:
                    </div>
                    <div className='wbdv-grid-btn'>
                      {this.props.gridButton}
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
            {this.props.courses.map(course =>
                <CourseRowComponent
                    refreshCourses={this.props.refreshCourses}
                    deleteCourse={this.props.deleteCourse}
                    key={course._id}
                    course={course}/>
            )}
            </tbody>
          </table>
        </div>
    )
  }
}