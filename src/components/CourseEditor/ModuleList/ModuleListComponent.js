import React from 'react';
import '../../../styles.css';
import './ModuleListComponent.css';

const ModuleListComponent = (props) => {
  const moduleItem = (module) =>
      <li
          key={module.name}
          className={module.name === props.selectedModule.name ?
              'list-group-item wbdv-module-item wbdv-module-selected' :
              'list-group-item wbdv-module-item'}
          onClick={() => props.selectModule(module)}
      >
        <div>{module.name}</div>
        <button
            className="icon-link delete-btn wbdv-btn"
            onClick={() => alert('Pretending to delete module')}
        >X</button>
      </li>;

  return(
      <div>
        <div className="wbdv-module-list-header">
          <div>Modules</div>
          <button
              className="icon-link wbdv-btn"
              onClick={() => alert('Pretending to add module')}
          >+</button>
        </div>

        <ul className="list-group wbdv-module-list">
          {props.modules.map(moduleItem)}
        </ul>
      </div>
  )
};

export default ModuleListComponent;