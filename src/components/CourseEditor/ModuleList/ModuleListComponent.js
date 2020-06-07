import React from 'react';
import {connect} from 'react-redux';
import {select_module} from '../../../store/SelectedModuleReducer';
import '../../../styles.css';
import './ModuleListComponent.css';

class ModuleListComponent extends React.Component {
  moduleItem = (module) => (
      <li
          key={module._id}
          className={module._id === this.props.selected_module._id ?
              'list-group-item wbdv-module-item wbdv-module-selected' :
              'list-group-item wbdv-module-item'}
          onClick={() => this.props.select_module(module)}
      >
        <div>{module.name}</div>
        <button
            className="wbdv-icon-link wbdv-delete-btn wbdv-btn"
            onClick={() => alert('Pretending to delete module')}
        >X</button>
      </li>
  );


  render() {
    return(
      <div>
        <div className="wbdv-module-list-header">
          <div>Modules</div>
          <button
              className="wbdv-icon-link wbdv-btn"
              onClick={() => alert('Pretending to add module')}
          >+</button>
        </div>

        <ul className="list-group wbdv-module-list">
          {this.props.modules.map(this.moduleItem)}
        </ul>
      </div>
  )}
}

const mapStateToProps = (state) => ({
  selected_module: state.selected_module,
});

const mapDispatchToProps = (dispatch) => ({
  select_module: (module) => dispatch(select_module(module))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModuleListComponent);