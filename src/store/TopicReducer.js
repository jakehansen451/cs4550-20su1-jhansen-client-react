// Actions
export const SET_TOPICS = 'SET_TOPICS';
export const CREATE_TOPIC = 'CREATE_TOPIC';
export const FIND_TOPICS_FOR_COURSE = 'FIND_TOPICS_FOR_COURSE';
export const FIND_TOPIC = 'FIND_TOPIC';
export const UPDATE_TOPIC = 'UPDATE_TOPIC';
export const DELETE_TOPIC = 'DELETE_TOPIC';

// Action creators
export const set_topics = (topics) => {
  return {type: SET_TOPICS, topics}
};

export const create_topic = (topic) => {
  return {type: CREATE_TOPIC, topic}
};

export const find_topics_for_lesson = (lessonId) => {
  return {type: FIND_TOPICS_FOR_COURSE, lessonId}
};

export const find_topic = (topicId) => {
  return {type: FIND_TOPIC, topicId}
};

export const update_topic = (topic) => {
  return {type: UPDATE_TOPIC, topic}
};

export const delete_topic = (topicId) => {
  return {type: DELETE_TOPIC, topicId}
};

// Reducers
export const topicReducer = (topics = [], action) => {
  switch(action.type) {
    case SET_TOPICS:
      return action.topics;
    case CREATE_TOPIC:
      return [...topics, action.topic];
    case FIND_TOPICS_FOR_COURSE:
      return topics.filter(topic => topic.lessonId === action.lessonId);
    case FIND_TOPIC:
      return topics.find(topic => topic._id === action.topicId);
    case UPDATE_TOPIC:
      return [...topics].map(topic =>
          topic._id === action.topic._id ? action.topic : topic);
    case DELETE_TOPIC:
      return topics.filter(topic => topic._id !== action.topicId);
    default:
      return topics;
  }
};