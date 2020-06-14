import React from 'react';
import {connect} from 'react-redux';
import {create_topic} from "../../../../store/TopicReducer";
import {select_topic} from "../../../../store/SelectedTopicReducer";
import TopicPillComponent from "./TopicPillComponent";
import TopicService from '../../../../services/TopicService';
import WidgetContainer
  from "../../../../containers/CourseEditor/LessonView/WidgetContainer/WidgetContainer";
import Utils from '../../../../utils/Utils';
import WidgetService from "../../../../services/WidgetService";
import {set_widgets} from "../../../../store/WidgetReducer";

class TopicPillsComponent extends React.Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.topics !== prevProps.topics) {
      this.props.selectTopic(this.props.topics.length > 0
          ? this.props.topics[0] : {});
    }

    if (!Utils.isEmpty(this.props.selected_topic)
        && this.props.selected_topic !== prevProps.selected_topic) {
      WidgetService.findWidgetsForTopic(this.props.selected_topic._id)
      .then(actualWidgets => this.props.setWidgets(actualWidgets))
    }
  }

  createTopic = () => {
    const topic = {
      lessonId: this.props.selected_lesson._id,
      name: 'New Topic',
    };
    TopicService.createTopic(this.props.selected_lesson._id, topic)
    .then(actualTopic => this.props.addTopic(actualTopic));
  };

  topicPill = (topic, index) => {
    return (
        <TopicPillComponent key={index} topic={topic}/>
    )
  };

  render() {
    return (
        <div>
          <ul className="nav nav-tabs topic-navbar wbdv-topic-pill-list">
            {this.props.topics.map(this.topicPill)}
            <li className="nav-item">
              <div
                  className="nav-link topic-link wbdv-icon-link wbdv-topic-add-btn wbdv-topic-pill"
                  onClick={this.createTopic}
              >
                +
              </div>
            </li>
          </ul>
          {!Utils.isEmpty(this.props.selected_topic)
          && <WidgetContainer
              widgets={this.props.widgets
                  ? this.props.widgets.filter((widget) =>
                      widget.topicId === this.props.selected_topic._id) : []}
          />}
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selected_topic: state.selected_topic,
  selected_lesson: state.selected_lesson,
  widgets: state.widgets,
});

const mapDispatchToProps = (dispatch) => ({
  addTopic: (topic) => dispatch(create_topic(topic)),
  selectTopic: (topic) => dispatch(select_topic(topic)),
  setWidgets: (widgets) => dispatch(set_widgets(widgets)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    TopicPillsComponent);