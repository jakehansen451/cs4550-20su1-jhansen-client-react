import React from 'react';
import WidgetListComponent
  from "../../../../components/CourseEditor/LessonView/TopicPills/WidgetList/WidgetListComponent";
import './WidgetContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import connect from "react-redux/es/connect/connect";
import WidgetService from "../../../../services/WidgetService";
import {create_widget} from "../../../../store/WidgetReducer";
import Utils from "../../../../utils/Utils";
import {toggle_widget_preview} from "../../../../store/WidgetPreviewReducer";

class WidgetContainer extends React.Component {

  addWidget = () => {
    if (!Utils.isEmpty(this.props.selected_topic)) {
      WidgetService.createWidget(this.props.selected_topic._id,
          {
            name: 'New Widget',
            type: 'HEADING',
            topicId: this.props.selected_topic._id,
          })
      .then(newWidget => this.props.addWidget(newWidget))
    }
  };

  render() {
    return(
        <div className="wbdv-topic-content">
          <div className="wbdv-section-header">
            <div>Widgets</div>
            <div>
              <span className='wbdv-widget-preview-label'>Preview mode:</span>
              <FontAwesomeIcon
                  className='wbdv-icon-link wbdv-widget-preview-toggle'
                  icon={this.props.widget_preview ? faToggleOn : faToggleOff}
                  onClick={this.props.toggleWidgetPreview}
              />
              <button
                  className="wbdv-btn wbdv-icon-link"
                  onClick={this.addWidget}
              >
                +
              </button>
            </div>
          </div>
          <WidgetListComponent
              widgets={this.props.widgets}
          />
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selected_topic: state.selected_topic,
  selected_widget: state.selected_widget,
  widget_preview: state.widget_preview,
});

const mapDispatchToProps = (dispatch) => ({
  addWidget: (widget) => dispatch(create_widget(widget)),
  toggleWidgetPreview: () => dispatch(toggle_widget_preview()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetContainer);