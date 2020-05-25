import React from "react";
import ModuleListComponent from '../../components/CourseEditor/ModuleList/ModuleListComponent.js';
import EditorNavbarComponent from '../../components/CourseEditor/EditorNavbar/EditorNavbarComponent';
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
          <div className='modules-section'>
            <div className='modules-list'>
            {ModuleListComponent({
              modules: !Utils.isEmpty(this.state.course) ? this.state.course.modules : [],
              selectedModule: this.state.selectedModule,
              selectModule: this.selectModule,
            })}
            </div>
            <div className='modules-detail'>

              <div className="row">
                <div className="topics-list col-9">
                  <div>
                    <ul className="nav nav-tabs topic-navbar wbdv-topic-pill-list">
                      <li className="nav-item">
                        <a className="nav-link topic-link wbdv-topic-pill active topic-selected" href="#">Topic 1</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link topic-link wbdv-topic-pill" href="#">Topic 2</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link topic-link wbdv-topic-pill" href="#">Topic 3</a>
                      </li>
                      <li className="nav-item">
                        <div className="nav-link topic-link icon-link wbdv-topic-add-btn" href="#">+</div>
                      </li>
                    </ul>
                  </div>
                  <div className="topic-content">
                    <div>
                      <div className="section-header">
                        <div>Widgets</div>
                        <a
                            className="wbdv-widget-item-add-btn icon-link"
                            href="#"
                        >+</a>
                      </div>
                      <div className="accordion" id="widget-accordion">
                        <div className="card">
                          <div className="card-header widget-heading-bar" id="widget1-heading">
                            <button
                                className="btn btn-link widget-clickable-label"
                                type="button"
                                data-toggle="collapse"
                                data-target="#widget1"
                                aria-expanded="true"
                                aria-controls="widget1"
                            >
                              Heading widget
                            </button>
                            <div>
                              <div className="btn-group">
                                <button className="fa fa-arrow-up btn btn-light"></button>
                                <button className="fa fa-arrow-down btn btn-light"></button>
                              </div>
                              <a
                                  className="icon-link delete-btn"
                                  href="#"
                              >X</a>
                            </div>
                          </div>
                          <div
                              id="widget1"
                              className="collapse show widget-body"
                              aria-labelledby="widget1-heading"
                              data-parent="#widget-accordion"
                          >
                            <form>
                              <div className="form-group widget-edit-row">
                                <label className="col-form-label widget-input-label" htmlFor="widget-name-input">
                                  Widget name:
                                </label>
                                <input
                                    className="widget-input-field wbdv-field col"
                                    id="widget-name-input"
                                    type="text"
                                    placeholder="Heading widget"
                                />
                              </div>
                              <div className="form-group widget-edit-row">
                                <label className="col-form-label widget-input-label">
                                  Widget type:
                                </label>
                                <select className="widget-input-field wbdv-field col">
                                  <option value="Heading">Heading</option>
                                  <option value="Widget type 2">Widget type 2</option>
                                  <option value="Widget type 3">Widget type 3</option>
                                </select>
                              </div>
                            </form>
                            <form className="heading-widget-edit">
                              <div className="widget-edit-heading">Heading widget</div>
                              <div className="widget-edit-row">
                                <label className="col-form-label widget-input-label" htmlFor="heading-body-input">
                                  Heading text:
                                </label>
                                <input
                                    className="widget-input-field wbdv-field col"
                                    id="heading-body-input"
                                    type="text"
                                    placeholder="Put your heading text here"
                                />
                              </div>
                            </form>
                            <h5>Widget Preview:</h5>
                            <div className="heading-widget-preview">
                              <h2>Put your heading text here</h2>
                            </div>
                          </div>
                        </div>






                        <div className="card">
                          <div className="card-header widget-heading-bar" id="widget2-heading">
                            <button
                                className="btn btn-link widget-clickable-label"
                                type="button"
                                data-toggle="collapse"
                                data-target="#widget2"
                                aria-expanded="true"
                                aria-controls="widget2"
                            >
                              Widget 2
                            </button>
                            <div>
                              <div className="btn-group">
                                <button className="fa fa-arrow-up btn btn-light"></button>
                                <button className="fa fa-arrow-down btn btn-light"></button>
                              </div>
                              <a
                                  className="icon-link delete-btn"
                                  href="#"
                              >X</a>
                            </div>
                          </div>
                          <div
                              id="widget2"
                              className="collapse"
                              aria-labelledby="widget2-heading"
                              data-parent="#widget-accordion"
                          >
                            <div>
                              Widget 2 body
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )}
}