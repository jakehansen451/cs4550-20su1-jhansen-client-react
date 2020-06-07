import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faEdit} from "@fortawesome/free-solid-svg-icons";
import ModuleService from "../../../../services/ModuleService";
import {select_module} from "../../../../store/SelectedModuleReducer";
import {
  delete_module,
  update_module
} from "../../../../store/ModuleReducer";
import connect from "react-redux/es/connect/connect";

class ModuleRowComponent extends React.Component {
  state = {
    editing: false,
    newModuleTitle: this.props.module.name,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state === prevState && this.state.newModuleTitle !== this.props.module.name) {
      this.setState({newModuleTitle: this.props.module.name})
    }
  }

  toggleEditing = () => {
    this.setState({editing: !this.state.editing})
  };

  saveEdit = () => {
    if (this.state.newModuleTitle !== this.props.module.name) {
      const newModule = {...this.props.module, name: this.state.newModuleTitle};
      ModuleService.updateModule(this.props.module._id, newModule)
      .then(actualModule => this.props.updateModule(newModule));
    }
    this.toggleEditing();
  };

  removeModule = (moduleId) => {
    ModuleService.deleteModule(moduleId)
    .then(response => this.props.removeModule(moduleId))
  };

  render() {
    return (
        <li
            key={this.props.key}
            className={this.props.module._id === this.props.selected_module._id
                || this.state.editing
                ?
                'list-group-item wbdv-module-item wbdv-module-selected' :
                'list-group-item wbdv-module-item'}
            onClick={() => this.props.selectModule(this.props.module)}
        >
          <div>{this.state.editing ?
              <input
                  className="wbdv-field"
                  onChange={(event) => this.setState({
                    newModuleTitle: event.target.value
                  })}
                  value={this.state.newModuleTitle}/>
              :
              this.props.module.name}</div>
          <div>
            {this.state.editing ?
                <button
                    className='wbdv-icon-link wbdv-btn'
                    onClick={this.saveEdit}>
                  <FontAwesomeIcon
                      className="wbdv-icon-link"
                      icon={faCheck}/>
                </button>
                :
                <button
                    className='wbdv-icon-link wbdv-btn'
                    onClick={this.toggleEditing}>
                  <FontAwesomeIcon
                      className="wbdv-icon-link"
                      icon={faEdit}/>
                </button>
            }
            {this.state.editing ?
                <button
                    className="wbdv-icon-link wbdv-delete-btn wbdv-btn"
                    onClick={this.toggleEditing}
                >
                  X
                </button>
                :
                <button
                    className="wbdv-icon-link wbdv-delete-btn wbdv-btn"
                    onClick={() => this.removeModule(this.props.module._id)}>
                  X
                </button>
            }

          </div>
        </li>
    )
  }
}

const mapStateToProps = (state) => ({
  selected_module: state.selected_module,
});

const mapDispatchToProps = (dispatch) => ({
  selectModule: (module) => dispatch(select_module(module)),
  updateModule: (module) => dispatch(update_module(module)),
  removeModule: (moduleId) => dispatch(delete_module(moduleId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModuleRowComponent);