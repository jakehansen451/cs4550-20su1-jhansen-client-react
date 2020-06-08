import React from "react";
import connect from "react-redux/es/connect/connect";
import {select_topic} from "../../../../store/SelectedTopicReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faEdit,
  faTimes,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import TopicService from '../../../../services/TopicService';
import {delete_topic, update_topic} from "../../../../store/TopicReducer";

import './TopicPillsComponent.css';
import './TopicPillComponent.css';

class TopicPillComponent extends React.Component {
  state = {
    editing: false,
    newTopicName: this.props.topic.name,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state === prevState
        && (this.state.newTopicName !== this.props.topic.name)) {
      this.setState({newTopicName: this.props.topic.name})
    }
  }

  toggleEditing = () => {
    this.setState({editing: !this.state.editing})
  };

  saveEdit = () => {
    if (this.state.newTopicName !== this.props.topic.name) {
      const newTopic = {...this.props.topic, name: this.state.newTopicName};
      TopicService.updateTopic(this.props.topic._id, newTopic)
      .then(actualTopic => this.props.updateTopic(newTopic));
    }
    this.toggleEditing();
  };

  removeTopic = () => {
    TopicService.deleteTopic(this.props.topic._id)
    .then(response => this.props.removeTopic(this.props.topic._id));
    this.toggleEditing();
  };

  render() {
    return (
        <li
            className="nav-item wbdv-topic-pill-nav-item"
            onClick={() => this.props.selectTopic(this.props.topic)}
        >
          <div className={this.props.selected_topic._id === this.props.topic._id
              ? "nav-link wbdv-topic-pill active topic-selected"
              : "nav-link wbdv-topic-pill"
          }
          >
            {this.state.editing ?
                <div className='wbdv-topic-pill'>
                  <input
                      className="wbdv-field wbdv-topic-name-input"
                      onChange={(event) => this.setState({
                        newTopicName: event.target.value
                      })}
                      value={this.state.newTopicName}/>
                  <FontAwesomeIcon
                      className='wbdv-icon-link wbdv-topic-btn'
                      icon={faCheck}
                      onClick={this.saveEdit}
                  />
                  <FontAwesomeIcon
                      className='wbdv-icon-link wbdv-topic-btn wbdv-delete-btn'
                      icon={faTimes}
                      onClick={this.toggleEditing}
                  />
                  <FontAwesomeIcon
                      className='wbdv-icon-link wbdv-topic-btn wbdv-delete-btn'
                      icon={faTrash}
                      onClick={this.removeTopic}
                  />
                </div>
                :
                <div>
                  {this.props.topic.name}
                  <FontAwesomeIcon
                      className='wbdv-icon-link wbdv-topic-btn'
                      icon={faEdit}
                      onClick={this.toggleEditing}
                  />
                </div>
            }
          </div>
        </li>
    )
  }
}

const mapStateToProps = (state) => ({
  selected_topic: state.selected_topic,
});

const mapDispatchToProps = (dispatch) => ({
  selectTopic: (topic) => dispatch(select_topic(topic)),
  removeTopic: (topic) => dispatch(delete_topic(topic)),
  updateTopic: (topic) => dispatch(update_topic(topic)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicPillComponent);