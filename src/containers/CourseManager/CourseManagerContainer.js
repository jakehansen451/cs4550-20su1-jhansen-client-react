import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faTh, faBars } from '@fortawesome/free-solid-svg-icons';
import CourseTableComponent from "../../components/CourseTable/CourseTableComponent";
import CourseGridComponent from "../../components/CourseGrid/CourseGridComponent";
import courseService from "../../services/CourseService";
import DateUtils from '../../utils/DateUtils';
import '../../styles.css';
import './CourseManagerContainer.css';

class CourseManagerContainer extends React.Component {
  state = {
    layout: this.props.match.params.layout,
    courses: [],
    sort: 'date-desc',
  };

  componentDidMount() {
    courseService.findAllCourses()
    .then(actualArrayOfCourses =>
        this.setState({ courses: actualArrayOfCourses.map((course) => {
          return {...course, modified: DateUtils.toLocalDateTime(course.modified)}
        })})
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.match.params.layout !== this.props.match.params.layout) {
      this.setState({ layout: this.props.match.params.layout })
    }
  }

  setLayout = (layout) => {
    this.props.history.push(`/courses/${layout}/`)
  };

  deleteCourse = (courseToDelete) =>
      courseService.deleteCourse(courseToDelete._id)
      .then(status => this.setState(prevState => ({
        courses: prevState.courses.filter(course => course !== courseToDelete)
      })));

  sortTitle = (event, dir = '') => {
    let sort;
    if (dir) sort = 'title-'.concat(dir);
    else sort = this.state.sort === 'title-desc' ? 'title-asc' : 'title-desc';
    this.setState({...this.state, sort});
  };

  sortOwner = (event, dir = '') => {
    let sort;
    if (dir) sort = 'owner-'.concat(dir);
    else  sort = this.state.sort === 'owner-desc' ? 'owner-asc' : 'owner-desc';
    this.setState({...this.state, sort});
  };

  sortDate = () => {
    this.setState({
      ...this.state,
      sort: this.state.sort === 'date-desc' ? 'date-asc' : 'date-desc',
    });
  };

  sortCourses = () => {
    let sortFn;
    if (this.state.sort === 'title-asc') {
      sortFn = (a, b) => a.title.toString() <= b.title.toString() ? 1 : -1;
    } else if (this.state.sort === 'title-desc') {
      sortFn = (a, b) => a.title.toString() <= b.title.toString() ? -1 : 1;
    } else if (this.state.sort === 'owner-asc') {
      sortFn = (a, b) => a.owner.toString() <= b.owner.toString() ? 1 : -1;
    } else if (this.state.sort === 'owner-desc') {
      sortFn = (a, b) => a.owner.toString() <= b.owner.toString() ? -1 : 1;
    } else if (this.state.sort === 'date-asc') {
      sortFn = (a, b) => a.modified.toString() <= b.modified.toString() ? 1 : -1;
    } else if (this.state.sort === 'date-desc') {
      sortFn = (a, b) => a.modified.toString() <= b.modified.toString() ? -1 : 1;
    }
    return this.state.courses.sort(sortFn);
  };

  refreshCourses = () => {
    courseService.findAllCourses()
    .then((actualCourses => {
      this.setState(prevState => ({
            ...prevState,
            courses: actualCourses.map(course => ({
                  ...course,
                  modified: DateUtils.toLocalDateTime(course.modified)
            }))
      }));
    }))
  };

  render() {
    return(
        <div>
          <nav className="navbar fixed-top course-list-search-navbar">
            <div>
              <Link to='/'>
                <FontAwesomeIcon className='icon-link' icon={faArrowCircleLeft} />
              </Link>
              <button
                  className="fa fa-bars icon-link wbdv-field wbdv-hamburger"
              />
              <div className="navbar-brand">
                Browse Courses
              </div>
            </div>
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
          </nav>
          {
            this.state.layout === 'table' &&
            <div>
              <CourseTableComponent
                  gridButton={
                    <FontAwesomeIcon
                        icon={faTh}
                        onClick={() => this.setLayout('grid')}
                        className='icon-link switch-layout-btn'
                    />
                  }
                  sortTitle={this.sortTitle}
                  sortOwner={this.sortOwner}
                  sortDate={this.sortDate}
                  deleteCourse={this.deleteCourse}
                  courses={this.sortCourses()}
                  sort={this.state.sort}
                  refreshCourses={this.refreshCourses}
              />
            </div>
          }
          {
            this.state.layout === 'grid' &&
            <div>
              <CourseGridComponent
                  tableButton={
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={() => this.setLayout('table')}
                        className='icon-link switch-layout-btn'
                    />
                  }
                  sortTitle={this.sortTitle}
                  sortOwner={this.sortOwner}
                  sortDate={this.sortDate}
                  deleteCourse={this.deleteCourse}
                  courses={this.sortCourses()}
                  sort={this.state.sort}
                  refreshCourses={this.refreshCourses}
              />
            </div>
          }
        </div>
    )
  }
}

export default CourseManagerContainer
