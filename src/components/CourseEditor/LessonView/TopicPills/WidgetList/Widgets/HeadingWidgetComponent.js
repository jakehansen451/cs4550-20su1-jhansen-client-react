import React from 'react';
import '../../../../../../styles.css';
import './HeadingWidgetComponent.css';
import WidgetFormComponent from "./WidgetFormComponent";


export default class HeadingWidgetComponent extends React.Component {

  render() {
    const name = this.props.widget.name;
    return(
        this.props.active &&
        <div
            id={name}
            className="collapse show wbdv-widget-body"
            aria-labelledby={name.concat('-heading')}
            data-parent="#widget-accordion"
        >
          <WidgetFormComponent/>
          <form className="wbdv-heading-widget-edit">
            <div className="wbdv-widget-edit-heading">Heading widget</div>
            <div className="wbdv-widget-edit-row">
              <label className="col-form-label wbdv-widget-input-label" htmlFor="heading-body-input">
                Heading text:
              </label>
              <input
                  className="wbdv-widget-input-field wbdv-field col"
                  id="heading-body-input"
                  type="text"
                  placeholder="Put your heading text here"
              />
            </div>
          </form>
          <h5>Widget Preview:</h5>
          <div className="wbdv-heading-widget-preview">
            <h2>Put your heading text here</h2>
          </div>
        </div>
    )};
}