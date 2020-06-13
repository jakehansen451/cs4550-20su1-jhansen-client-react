import React from 'react';
import WidgetListComponent
  from "../../../../components/CourseEditor/LessonView/TopicPills/WidgetList/WidgetListComponent";
import './WidgetContainer.css';
import connect from "react-redux/es/connect/connect";
import WidgetService from "../../../../services/WidgetService";
import {create_widget} from "../../../../store/WidgetReducer";
import Utils from "../../../../utils/Utils";

const fakeWidgets = [
  {type: 'HEADING', name: 'Widget 1'},
  {type: 'PARAGRAPH', name: 'Widget 2'}
];

class WidgetContainer extends React.Component {
  state = {
    widgets: fakeWidgets,
    activeWidget: fakeWidgets[1]
  };

  addWidget = () => {
    if (!Utils.isEmpty(this.props.selected_topic)) {
      WidgetService.createWidget(this.props.selected_topic._id,
          {
            name: 'New Widget',
            type: 'HEADING',
            topicId: this.props.selected_topic._id,
          })
      .then(newWidget => {
        console.log('New widget');
        console.log(newWidget);
        this.props.addWidget(newWidget)
      })
    }
  };

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
              widgets={this.props.widgets}
              activeWidget={this.props.selected_widget}
          />
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selected_topic: state.selected_topic,
  widgets: state.widgets,
  selected_widget: state.selected_widget,
});

const mapDispatchToProps = (dispatch) => ({
  addWidget: (widget) => dispatch(create_widget(widget)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetContainer);