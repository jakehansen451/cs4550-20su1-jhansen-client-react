import React from 'react';
import {connect} from 'react-redux';
import {create_topic} from "../../../../store/TopicReducer";

class TopicPillsComponent extends React.Component {

  topicPill = (topic) => (
      <li
          key={topic._id}
          className="nav-item"
          onClick={() => this.props.selectTopic(topic)}
      >
        <div className={this.props.active.name === topic.name
            ? "nav-link wbdv-topic-pill active topic-selected"
            : "nav-link wbdv-topic-pill"
        }
        >
          {topic.name}
        </div>
      </li>
  );

  render() {
    return (
        <div>
          <ul className="nav nav-tabs topic-navbar wbdv-topic-pill-list">
            {this.props.topics.map(this.topicPill)}
            <li className="nav-item">
              <div
                  className="nav-link topic-link wbdv-icon-link wbdv-topic-add-btn"
                  onClick={() => this.props.create_topic({
                    lessonId: this.props.selected_lesson._id,
                  })}
              >
                +
              </div>
            </li>
          </ul>
        </div>
    )
  }
}


const mapStateToProps = (state) => ({
  selected_topic: state.selected_topic,
  selected_lesson: state.selected_lesson
});

const mapDispatchToProps = (dispatch) => ({
  create_topic: (topic) => dispatch(create_topic(topic))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicPillsComponent);