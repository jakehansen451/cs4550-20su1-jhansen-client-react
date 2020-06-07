import React from "react";
import {connect} from 'react-redux';
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
    course: {},
    selectedModuleId: {},
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    CourseService.findCourseById(id)
    .then((actualCourse) => {
      const course = {
        ...actualCourse,
        tabs: dummyTabs,
        currentTab: 'Pages',
      };
      this.setState({
        ...this.state,
        course: course,
        selectedModuleId: (this.props.modules.find(module => module._id === id)
            || {_id: ''})
            ._id
      });
    });co
  };

  selectModule = (module) =>
      this.setState({...this.state, selectedModule: module});

  selectTab = (tabName) =>
    alert('Selected tab '.concat(tabName));

  addTab = () => alert('Pretending to add tab');

  render() {
    return(
        <div>
          {EditorNavbarComponent({
            title: !Utils.isEmpty(this.state.course) ? this.state.course.title : '',
            tabs: !Utils.isEmpty(this.state.course) ? this.state.course.tabs : [],
            currentTab: this.state.currentTab,
            selectTab: this.selectTab,
            addTab: this.addTab,
          })}
          <div className='wbdv-modules-section'>
            <div className='wbdv-modules-list'>
            {ModuleListComponent({
              modules: this.props.modules,
              selectedModuleId: this.state.selectedModuleId,
              selectModule: this.selectModule,
            })}
            </div>
            <div className='wbdv-topic-section'>
              <TopicViewContainer
                  topics={
                    this.props.topics.filter(topic =>
                        topic.moduleId === this.state.selectedModuleId)
                  }
              />
            </div>
          </div>
        </div>
  )}
}

const mapStateToProps = (state) => ({
  modules: state.modules,
  topics: state.topics
});

export default connect(mapStateToProps, null)(CourseEditorContainer);