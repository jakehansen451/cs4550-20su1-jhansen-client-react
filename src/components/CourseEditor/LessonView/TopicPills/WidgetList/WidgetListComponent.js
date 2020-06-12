import React from 'react';
import '../../../../../styles.css';
import './WidgetListComponent.css';
import HeadingWidgetComponent from "./Widgets/HeadingWidgetComponent";
import ParagraphWidgetComponent from "./Widgets/ParagraphWidgetComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";

const WidgetListComponent = (props) => {

  const createWidget = (widget, index) => {
    return (
        <div className="card" key={index}>
          <div
              className="card-header wbdv-widget-heading-bar"
              id={widget.name.concat('-heading')}
          >
            <button
                className="btn btn-link wbdv-clickable-label"
                type="button"
                data-toggle="collapse"
                data-target={'#'.concat(widget.name)}
                aria-expanded="true"
                aria-controls={widget.name}
            >
              {widget.name}
            </button>
            <div>
              <div className="btn-group">
                <button className="btn btn-light">
                  <FontAwesomeIcon icon={faArrowUp}/>
                </button>
                <button className="btn btn-light">
                  <FontAwesomeIcon icon={faArrowDown}/>
                </button>
              </div>
              <button
                  className="wbdv-icon-link wbdv-btn wbdv-delete-btn"
                  onClick={() => alert('Pretending to delete widget')}
              >
                X
              </button>
            </div>
          </div>
          {selectWidget(widget)}
        </div>);
  };

  const selectWidget = (widget) => {
    if (widget.type === 'heading') {
      return createHeadingWidget(widget);
    } else if (widget.type === 'paragraph') {
      return createParagraphWidget(widget);
    } else if (widget.type === 'youtube') {

    }
  };

  const createHeadingWidget = (widget) =>
      <HeadingWidgetComponent
          widget={widget}
          active={props.activeWidget.name === widget.name}
      />;

  const createParagraphWidget = (widget) =>
      <ParagraphWidgetComponent
          widget={widget}
          active={props.activeWidget.name === widget.name}
      />;

  return (
      <div className="accordion" id="widget-accordion">
        {props.widgets.map(createWidget)}
      </div>
  );
};

export default WidgetListComponent;
