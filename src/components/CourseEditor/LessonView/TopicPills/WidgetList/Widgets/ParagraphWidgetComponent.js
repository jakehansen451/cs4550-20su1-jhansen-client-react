import React from 'react';
import WidgetFormComponent from "./WidgetFormComponent";
import '../../../../../../styles.css';
import './WidgetStyles.css';
import './ParagraphWidgetComponent.css';

export default class ParagraphWidgetComponent extends React.Component {
  render() {
    const name = this.props.widget.name;
    return (
        this.props.active &&
            <div
                id={name}
                className="wbdv-widget-body"
            >
              <WidgetFormComponent/>
              <form className="wbdv-widget-edit">
                <div className="wbdv-widget-type">Paragraph widget</div>
                <div className='wbdv-paragraph-input-wrapper'>
                  <div
                      contentEditable={true}
                      className="wbdv-paragraph-input-field wbdv-field col"
                      id="paragraph-body-input"
                      type="text"
                      placeholder="Put your paragraph text here"
                  />
                </div>
              </form>
              <h5>Widget Preview:</h5>
              <div className="wbdv-widget-preview">
                <p>
                  Paragraph text
                </p>
              </div>
            </div>
    )}
};
