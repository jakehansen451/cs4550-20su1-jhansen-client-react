import React from "react";
import ModuleListComponent from '../../components/CourseEditor/ModuleList/ModuleListComponent';
import EditorNavbarComponent from '../../components/CourseEditor/EditorNavbar/EditorNavbarComponent';
import TopicViewContainer from './TopicView/TopicViewContainer';
import CourseService from '../../services/CourseService';
import Utils from '../../utils/Utils';
import './CourseEditorContainer.css';

const dummyModules = [
  {
    name: 'Module 1',
    topics: [
        {
          name: 'Topic 1',
          widgets: [
              { name: 'Widget 1', type: 'heading-widget' },
            { name: 'Widget 2', type: 'heading-widget' },
          ]
        },
      {
        name: 'Topic 2',
        widgets: [
            { name: 'Widget 1', type: 'heading-widget' },
        ]
      },
    ],
  },
  {
    name: 'Module 2',
    topics: [
      {
        name: 'Topic 1',
        widgets: [
          { name: 'Widget 1', type: 'heading-widget' },
          { name: 'Widget 2', type: 'heading-widget' },
          { name: 'Widget 3', type: 'heading-widget' },
        ]
      }
    ],
  }
];

const dummyTabs = ['Build', 'Pages', 'Theme', 'Store', 'Apps'];

export default class CourseEditorContainer extends React.Component {
  state = {
    currentTab: 'Pages',
    course: {},
    selectedModule: {},
  };

  getCourseIDFromURL = () =>
      window.location.pathname.replace('/editor/', '').replace('/', '');

  componentDidMount() {
    if (Utils.isEmpty(this.state.course) || Utils.isEmpty(this.state.selectedModule)) {
      const id = this.getCourseIDFromURL();
      CourseService.findCourseById(id)
      .then((actualCourse) => {
        const course = {
          ...actualCourse,
          modules: dummyModules,
          tabs: dummyTabs,
          currentTab: 'Pages',
        };
        const selectedModule = course.modules.length > 0
            ? course.modules[0]
            : {};
        this.setState({...this.state, course: course, selectedModule: selectedModule});
      });
    }
  };

  selectModule = (module) =>
      this.setState({...this.state, selectedModule: module});

  selectTab = (tabName) =>
    alert('Selected tab '.concat(tabName));

  render() {
    return(
        <div>
          {EditorNavbarComponent({
            title: !Utils.isEmpty(this.state.course) ? this.state.course.title : '',
            tabs: !Utils.isEmpty(this.state.course) ? this.state.course.tabs : [],
            currentTab: this.state.currentTab,
            selectTab: this.selectTab,
          })}
          <div className='wbdv-modules-section'>
            <div className='wbdv-modules-list'>
            {ModuleListComponent({
              modules: !Utils.isEmpty(this.state.course) ? this.state.course.modules : [],
              selectedModule: this.state.selectedModule,
              selectModule: this.selectModule,
            })}
            </div>
            <div className='wbdv-topic-section'>
              <TopicViewContainer />
            </div>
          </div>
        </div>
  )}
}