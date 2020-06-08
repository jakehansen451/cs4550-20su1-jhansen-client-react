import React from 'react';
import WidgetListComponent
  from "../../../../components/CourseEditor/LessonView/TopicPills/WidgetList/WidgetListComponent";
import './WidgetContainer.css';
import connect from "react-redux/es/connect/connect";

const fakeWidgets = [
  {type: 'heading', name: 'Widget 1'},
  {type: 'heading', name: 'Widget 2'}
];

class WidgetContainer extends React.Component {
  state = {
    widgets: fakeWidgets,
    activeWidget: fakeWidgets[0]
  };

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
              activeWidget={this.state.activeWidget}
          />
        </div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetContainer);