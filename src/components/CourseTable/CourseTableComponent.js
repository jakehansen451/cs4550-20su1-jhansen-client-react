import React from "react";
import './CourseTableComponent.css';
import CourseRowComponent from "./CourseRow/CourseRowComponent";


export default class CourseTableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.gridButton = props.children;
  }

  render() {
    return (
        <div className="class-table">
          <div className="title-bar course-list-table-header">
            <h1>Course List</h1>
            <div className="search-chunk">
              <input
                  className="wbdv-field"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
              />
              <button
                  className="wbdv-button green-btn course-search-button"
                  type="submit"
              >
                Search
              </button>
            </div>
          </div>

          <table className="table table-striped course-table">
            <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th className="wbdv-owner">Owned By</th>
              <th className="wbdv-last-modified">Modified</th>
              <th>
                {this.gridButton}
              </th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.courses.map(course =>
                  <CourseRowComponent
                      deleteCourse={this.props.deleteCourse}
                      key={course._id}
                      course={course}
                  />
              )
            }
            </tbody>
          </table>
        </div>
    )
  }
}