import React from "react";
import './CourseTableComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import CourseRowComponent from "./CourseRow/CourseRowComponent";


export default class CourseTableComponent extends React.Component {
  sortIcon = () =>
      <FontAwesomeIcon
          className='sort-icon'
          icon={this.props.sort.includes('desc') ? faSortDown : faSortUp}
      />;

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
                  {this.props.gridButton}
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