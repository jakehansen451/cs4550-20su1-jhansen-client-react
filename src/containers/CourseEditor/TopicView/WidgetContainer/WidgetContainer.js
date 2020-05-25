import React from 'react';
import WidgetListComponent
  from "../../../../components/CourseEditor/TopicView/TopicPills/WidgetList/WidgetListComponent";
import './WidgetContainer.css';

export default class WidgetContainer extends React.Component {
  state = {
    widgets: this.props.widgets,
    activeWidget: this.props.widgets.length > 0 ? this.props.widgets[0] : {}
  };

  componentDidUpdate() {
    if (this.state.widgets !== this.props.widgets) {
      this.setState({
        widgets: this.props.widgets,
        activeWidget: this.props.widgets.length > 0 ? this.props.widgets[0] : {}
      });
    }
  }

  addWidget = () => alert('Pretending to add widget');

  render() {
    return(
        <div className="wbdv-topic-content">
          <div className="wbdv-section-header">
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