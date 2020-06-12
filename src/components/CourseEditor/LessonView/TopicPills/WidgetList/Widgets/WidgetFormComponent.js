import React from 'react';
import {connect} from 'react-redux';

class WidgetFormComponent extends React.Component {
  render() {
    return (
        <form>
          <div className="form-group wbdv-widget-edit-row">
            <label className="col-form-label wbdv-widget-input-label" htmlFor="widget-name-input">
              Widget name:
            </label>
            <input
                className="wbdv-widget-input-field wbdv-field col"
                id="widget-name-input"
                type="text"
                placeholder="Heading widget"
            />
          </div>
          <div className="form-group wbdv-widget-edit-row">
            <label className="col-form-label wbdv-widget-input-label">
              Widget type:
            </label>
            <select className="wbdv-widget-input-field wbdv-field col">
              <option value="Heading">Heading</option>
              <option value="Widget type 2">Widget type 2</option>
              <option value="Widget type 3">Widget type 3</option>
            </select>
          </div>
        </form>
    )
  }
}

export default connect(null, null)(WidgetFormComponent);