// Actions
export const SELECT_TOPIC = 'SELECT_TOPIC';

// Action creators
export const select_topic = (topic) => {
  return { type: SELECT_TOPIC, topic }
};

// Reducer
export const selectedTopicReducer = (selected_topic = {}, action) => {
  switch (action.type) {
    case SELECT_TOPIC:
      return action.topic;
    default:
      return selected_topic;
  }
};