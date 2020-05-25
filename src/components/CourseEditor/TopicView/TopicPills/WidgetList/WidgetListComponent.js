import React from 'react';
import '../../../../../styles.css';
import './WidgetListComponent.css';
import HeadingWidgetComponent from "./Widgets/HeadingWidgetComponent";

const WidgetListComponent = (props) => {
  const createWidget = (widget) => {
    if (widget.type === 'heading') {
      return createHeadingWidget(widget);
    }
  };

  const createHeadingWidget = (widget) =>
      <HeadingWidgetComponent
          key={widget.name}
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
