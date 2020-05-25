import React from 'react';

const TopicPillsComponent = (props) => {

  const topicPill = (topic) =>
      <li
          key={topic.name}
          className="nav-item"
          onClick={() => props.selectTopic(topic)}
      >
        <div className={props.active.name === topic.name
            ? "nav-link wbdv-topic-pill active topic-selected"
            : "nav-link wbdv-topic-pill"
        }
        >
          {topic.name}
        </div>
      </li>;

  return (
      <div>
        <ul className="nav nav-tabs topic-navbar wbdv-topic-pill-list">
          {props.topics.map(topicPill)}
          <li className="nav-item">
            <div
                className="nav-link topic-link wbdv-icon-link wbdv-topic-add-btn"
                onClick={props.addTopic}
            >
              +
            </div>
          </li>
        </ul>
      </div>
  )
};

export default TopicPillsComponent;