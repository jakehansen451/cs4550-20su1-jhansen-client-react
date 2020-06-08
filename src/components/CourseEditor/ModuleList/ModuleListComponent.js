import React from "react"
import { connect } from 'react-redux'
import {create_module, delete_module} from "../../../store/ModuleReducer";
import ModuleService from "../../../services/ModuleService";
import ModuleRowComponent from './ModuleRow/ModuleRowComponent';
import '../../../styles.css';
import './ModuleListComponent.css';
import LessonService from "../../../services/LessonService";
import {set_lessons} from "../../../store/LessonReducer";

class ModuleListComponent extends React.Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.selected_module !== prevProps.selected_module) {
      LessonService.findLessonsForModule(this.props.selected_module._id)
      .then(actualLessons => this.props.loadLessons(actualLessons));
    }
  }

  addModule = () => {
    const module = {
      name: 'New Module',
      courseId: this.props.courseId
    };
    ModuleService.createModule(this.props.courseId, module)
    .then(actualModule => this.props.addModule(actualModule));
  };

  moduleRow = (module, index) => (
    <ModuleRowComponent module={module} key={index}/>
  );


  render() {
    return(
      <div>
        <div className="wbdv-module-list-header">
          <div>Modules</div>
          <button
              className="wbdv-icon-link wbdv-btn"
              onClick={this.addModule}
          >+</button>
        </div>

        <ul className="list-group wbdv-module-list">
          {this.props.modules.map(this.moduleRow)}
        </ul>
      </div>
  )}
}

const mapStateToProps = (state) => ({
  selected_module: state.selected_module,
});

const mapDispatchToProps = (dispatch) => ({
  loadLessons: (lessons) => dispatch(set_lessons(lessons)),
  addModule: (module) => dispatch(create_module(module)),
  removeModule: (moduleId) => dispatch(delete_module(moduleId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModuleListComponent);