import React from "react";
import CourseRowComponent from "./CourseRow/CourseRowComponent";
import courseService from "../../services/CourseService";


export default class CourseTableComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.children);
    this.gridButton = props.children;
  }

  render() {
    return (
        <div className="class-table">
          <div className="title-bar course-list-table-header">
            <h1>Course List</h1>
            {this.gridButton}
            <div className="add-course-chunk">
              <input
                  className="wbdv-field course-list-search-input"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
              />
              <button className="btn green-btn" type="submit">Search</button>
            </div>
          </div>

          <table className="table table-striped course-table">
            <thead>
            <tr>
              <th></th>
              <th className="wbdv-header wbdv-title">Title</th>
              <th className="wbdv-header wbdv-owner">Owned By</th>
              <th className="wbdv-header wbdv-last-modified">Modified</th>
              <th className="wbdv-header wbdv-sort">
                <div className="d-flex justify-content-between">
                  <button
                      className="fa fa-sort table-button icon-link"></button>
                  <button
                      className="fa fa-th table-button icon-link wbdv-button wbdv-grid-layout"></button>
                  <button
                      className="fa fa-bars table-button icon-link wbdv-button wbdv-list-layout"></button>
                </div>
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