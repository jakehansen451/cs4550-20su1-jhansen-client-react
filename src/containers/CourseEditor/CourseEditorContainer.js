import React from "react";
import {connect} from 'react-redux';
import {find_modules_for_course, set_modules} from "../../store/ModuleReducer";
import {select_course} from "../../store/SelectedCourseReducer";
import ModuleService from "../../services/ModuleService";
import ModuleListComponent from '../../components/CourseEditor/ModuleList/ModuleListComponent';
import EditorNavbarComponent from '../../components/CourseEditor/EditorNavbar/EditorNavbarComponent';
import TopicViewContainer from './TopicView/TopicViewContainer';
import CourseService from '../../services/CourseService';
import Utils from '../../utils/Utils';
import './CourseEditorContainer.css';

const dummyTabs = ['Build', 'Pages', 'Theme', 'Store', 'Apps'];

class CourseEditorContainer extends React.Component {
  state = {
    currentTab: 'Pages',
    tabs: dummyTabs,
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    CourseService.findCourseById(id)
    .then(actualCourse => this.props.loadCourse(actualCourse));

    ModuleService.findModulesForCourse(id)
    .then(actualModules => this.props.loadModules(actualModules));

    this.props.filterModules(id);

    CourseService.findCourseById(id)
    .then((actualCourse) => {
      const course = {
        ...actualCourse,
        tabs: dummyTabs,
        currentTab: 'Pages',
      };
      this.setState({
        ...this.state,
        course: course
      });
    });
  };

  selectTab = (tabName) =>
    alert('Selected tab '.concat(tabName));

  addTab = () => alert('Pretending to add tab');

  render() {
    return(
        <div>
          {EditorNavbarComponent({
            title: (this.props.selected_course || {title: ''}).title,
            tabs: this.state.tabs,
            currentTab: this.state.currentTab,
            selectTab: this.selectTab,
            addTab: this.addTab,
          })}
          <div className='wbdv-modules-section'>
            <div className='wbdv-modules-list'>
            <ModuleListComponent
                modules={this.props.modules.filter(
                    module => module.courseId === (this.props.selected_course || {_id: ''})._id
                )}
                courseId={(this.props.selected_course || {_id: ''})._id}
            />
            </div>
            <div className='wbdv-topic-section'>
              {/*
              <TopicViewContainer
                  topics={Utils.isEmpty(this.props.selected_lesson)
                      ? []
                      : this.props.topics.filter(topic =>
                          topic.lessonId === this.props.selected_lesson._id)
                  }
              />
              */}
            </div>
          </div>
        </div>
  )}
}

const mapStateToProps = (state) => ({
  selected_course: state.selected_course,
  modules: state.modules,
  selected_lesson: state.selected_lesson,
  topics: state.topics
});

const mapDispatchToProps = (dispatch) => ({
  loadCourse: (course) => dispatch(select_course(course)),
  loadModules: (modules) => dispatch(set_modules(modules)),
  filterModules: (courseId) => dispatch(find_modules_for_course(courseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseEditorContainer);