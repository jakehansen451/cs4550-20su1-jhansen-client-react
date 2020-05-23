import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import CourseTableComponent from "../../components/CourseTable/CourseTableComponent";
import CourseGridComponent from "../../components/CourseGrid/CourseGridComponent";
import courseService from "../../services/CourseService";
import '../../styles.css';
import './CourseManagerContainer.css';

class CourseManagerContainer extends React.Component {
  state = {
    layout: this.props.match.params.layout,
    courses: [],
    newCourseTitle: ''
  };

  componentDidMount() {
    courseService.findAllCourses()
    .then(actualArrayOfCourses =>
        this.setState({ courses: actualArrayOfCourses })
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

  addCourse = (title) =>
      courseService.createCourse({
        title: title,
        owner: 'me',
        modified: (new Date()).toDateString()
      })
      .then(theActualNewCourse =>
          this.setState((prevState) => {
            return {
              courses: [
                ...prevState.courses,
                theActualNewCourse
              ]
            }
          }));

  render() {
    console.log(this.props);

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
                  children={
                      <button onClick={() => this.setLayout('grid')}>
                        Grid
                      </button>
                  }
                  deleteCourse={this.deleteCourse}
                  courses={this.state.courses}/>
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