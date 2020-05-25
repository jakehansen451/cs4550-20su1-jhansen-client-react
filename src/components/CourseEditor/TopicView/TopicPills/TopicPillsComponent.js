import React from 'react';

const TopicPillsComponent = (props) => {

  const topicPill = (topicName) =>
      <li className="nav-item">
        <a className={props.active === topicName
            ? "nav-link wbdv-topic-pill active topic-selected"
            : "nav-link wbdv-topic-pill"
        }
        >
          {topicName}
        </a>
      </li>;

  return (
      <div>
        <ul className="nav nav-tabs topic-navbar wbdv-topic-pill-list">
          {props.topics.map(topicPill)}
          <li className="nav-item">
            <div
                className="nav-link topic-link icon-link wbdv-topic-add-btn"
                onClick={() => alert('Pretending to add new topic.')}
            >
              +
            </div>
          </li>
        </ul>
      </div>
  )
};

export default TopicPillsComponent;