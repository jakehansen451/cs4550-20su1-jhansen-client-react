import React from 'react';
import WidgetListComponent
  from "../../../../components/CourseEditor/TopicView/TopicPills/WidgetList/WidgetListComponent";

export default class WidgetContainer extends React.Component {
  state = {
    widgets: this.props.widgets
  };

  addWidget = () => alert('Pretending to add widget');

  render() {
    return(
        <div className="topic-content">
          <div className="section-header">
            <div>Widgets</div>
            <button
                className="wbdv-btn wbdv-icon-link"
                onClick={this.addWidget}
            >
              +
            </button>
          </div>
          <WidgetListComponent
              widgets={this.state.widgets}
          />
        </div>
    )
  }
}