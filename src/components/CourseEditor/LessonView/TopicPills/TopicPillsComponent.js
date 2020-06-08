import React from 'react';
import {connect} from 'react-redux';
import {create_topic} from "../../../../store/TopicReducer";
import TopicPillComponent from "./TopicPillComponent";
import TopicService from '../../../../services/TopicService';
import WidgetContainer
  from "../../../../containers/CourseEditor/LessonView/WidgetContainer/WidgetContainer";
import Utils from '../../../../utils/Utils';

class TopicPillsComponent extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
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
          {!Utils.isEmpty(this.props.selected_topic) && <WidgetContainer/>}
        </div>
    )
  }
}


const mapStateToProps = (state) => ({
  selected_topic: state.selected_topic,
  selected_lesson: state.selected_lesson
});

const mapDispatchToProps = (dispatch) => ({
  addTopic: (topic) => dispatch(create_topic(topic)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicPillsComponent);