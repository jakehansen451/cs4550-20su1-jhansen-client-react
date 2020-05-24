import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faTh } from '@fortawesome/free-solid-svg-icons';
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
    newCourseTitle: '',
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
    this.props.history.push(`/${layout}/courses`)
  };

  deleteCourse = (courseToDelete) =>
      courseService.deleteCourse(courseToDelete._id)
      .then(status => this.setState(prevState => ({
        courses: prevState.courses.filter(course => course !== courseToDelete)
      })));

  addCourse = (title) => {
    if (this.state.newCourseTitle !== '') {
      courseService.createCourse({
        title: title,
        owner: 'me',
        modified: (new Date()).toISOString()
      })
      .then(theActualNewCourse =>
          this.setState((prevState) => {
            return {
              newCourseTitle: '',
              courses: [
                ...prevState.courses,
                {
                  ...theActualNewCourse,
                  modified: DateUtils.toLocalDateTime(theActualNewCourse.modified)
                }
              ]
            }
          }));
    } else {
      alert('New course title cannot be empty.');
    }
  };


  sortTitle = () => this.setState({
    ...this.state,
    sort: this.state.sort === 'title-desc' ? 'title-asc' : 'title-desc'
  });

  sortOwner = () => this.setState({
    ...this.state,
    sort: this.state.sort === 'owner-desc' ? 'owner-asc' : 'owner-desc'
  });

  sortDate = () => this.setState({
    ...this.state,
    sort: this.state.sort === 'date-desc' ? 'date-asc' : 'date-desc'
  });

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
              <a className="navbar-brand wbdv-label wbdv-course-manager">Browse
                Courses</a>
            </div>
            <form className="navbar-search-chunk">
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
              <a className="wbdv-button wbdv-add-course icon-link"
                 href="#"
                 onClick={ () => this.addCourse(this.state.newCourseTitle) }
              >+</a>
            </form>
          </nav>
          <br/>
          {
            this.state.layout === 'table' &&
            <div>
              <CourseTableComponent
                  gridButton={
                    <FontAwesomeIcon
                        icon={faTh}
                        onClick={() => this.setLayout('grid')}
                        className='icon-link float-right'
                    >
                      Grid
                    </FontAwesomeIcon>
                  }
                  sortTitle={this.sortTitle}
                  sortOwner={this.sortOwner}
                  sortDate={this.sortDate}
                  deleteCourse={this.deleteCourse}
                  courses={this.sortCourses()}
                  sort={this.state.sort}
              />
            </div>
          }
          {
            this.state.layout === 'grid' &&
            <div>
              <button
                  onClick={() =>
                      this.setLayout('table')}>
                Table
              </button>
              <CourseGridComponent courses={this.state.courses}/>
            </div>
          }
        </div>
    )
  }
}

export default CourseManagerContainer