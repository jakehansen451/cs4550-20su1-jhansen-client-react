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

  addTopic = () => alert('Pretending to add topic');

  selectTopic = (topic) => {
    this.setState({...this.state, activeTopic: topic})
  };

  render() {
    return (
        <div>
          <TopicPillsComponent
              topics={this.state.topics}
              active={this.state.activeTopic}
              addTopic={this.addTopic}
              selectTopic={this.selectTopic}
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