import React from 'react';
import {connect} from 'react-redux';
import WidgetTypes from './WidgetTypes';
import '../../../../../../styles.css';
import './WidgetStyles.css';
import './WidgetFormComponent.css'
import WidgetService from "../../../../../../services/WidgetService";
import {update_widget} from "../../../../../../store/WidgetReducer";

class WidgetFormComponent extends React.Component {
  updateWidgetType(type) {
    WidgetService.updateWidget(this.props.selected_widget._id,
        {...this.props.selected_widget, type})
    .then(updatedWidget => {
      this.props.updateWidget(updatedWidget);
    })
  }

  updateWidgetName(name) {
    if (name !== '') {
      WidgetService.updateWidget(this.props.selected_widget._id,
          {...this.props.selected_widget, name})
      .then(updatedWidget => {
        this.props.updateWidget(updatedWidget);
      })
    }
  }

  render() {
    return (
        <form className='wbdv-widget-form'>
          <div className="form-group wbdv-widget-edit-row">
            <label className="col-form-label wbdv-widget-input-label"
                   htmlFor="widget-name-input">
              Widget name:
            </label>
            <input
                onBlur={(e) => this.updateWidgetName(e.target.value)}
                className="wbdv-widget-input-field wbdv-field col"
                id="widget-name-input"
                type="text"
                placeholder="Widget name"
            />
          </div>
          <div className="form-group wbdv-widget-edit-row">
            <label className="col-form-label wbdv-widget-input-label">
              Widget type:
            </label>
            <select
                className="wbdv-widget-input-field wbdv-field col"
                onChange={(e) => this.updateWidgetType(e.target.value)}
                defaultValue={this.props.selected_widget.type}
            >
              {WidgetTypes.map((type) =>
                  <option key={type.value} value={type.value}>
                    {type.display}
                  </option>)}
            </select>
          </div>
        </form>
    )
  }
}

const mapStateToProps = (state) => ({
  selected_widget: state.selected_widget,
});

const mapDispatchToProps = (dispatch) => ({
  updateWidget: (widget) => dispatch(update_widget(widget)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    WidgetFormComponent);