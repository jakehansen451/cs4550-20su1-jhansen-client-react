import React from 'react';
import TopicPillsComponent from '../../../components/CourseEditor/TopicView/TopicPills/TopicPillsComponent';
import WidgetContainer from "./WidgetContainer/WidgetContainer";
import Utils from '../../../utils/Utils';

export default class TopicViewContainer extends React.Component {
  state = {
    topics: this.props.topics,
    activeTopic: this.props.topics.length > 0 ? this.props.topics[0] : {}
  };

  componentDidUpdate() {
    if (this.state.topics !== this.props.topics) {
      this.setState({
        topics: this.props.topics,
        activeTopic: this.props.topics.length > 0 ? this.props.topics[0] : {}
      });
    }
  }

  addTopic = (topicName) => alert('Pretending to add topic: '.concat(topicName, '.'));

  render() {
    return (
        <div>
          <TopicPillsComponent
              topics={this.state.topics}
              active={this.state.activeTopic}
              addTopic={this.addTopic}
          />
          <WidgetContainer
              widgets={!Utils.isEmpty(this.state.activeTopic)
                  ? this.state.activeTopic.widgets
                  : []
              }
          />
        </div>
    )
  }
}