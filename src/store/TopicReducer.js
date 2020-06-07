// Actions
export const CREATE_TOPIC = 'CREATE_TOPIC';
export const FIND_TOPICS_FOR_COURSE = 'FIND_TOPICS_FOR_COURSE';
export const FIND_TOPIC = 'FIND_TOPIC';
export const UPDATE_TOPIC = 'UPDATE_TOPIC';
export const DELETE_TOPIC = 'DELETE_TOPIC';

// Action creators
export const create_topic = (lessonId, topic) => {
  return {type: CREATE_TOPIC, lessonId, topic}
};

export const find_topics_for_lesson = (lessonId) => {
  return {type: FIND_TOPICS_FOR_COURSE, lessonId}
};

export const find_topic = (topicId) => {
  return {type: FIND_TOPIC, topicId}
};

export const update_topic = (topicId) => {
  return {type: UPDATE_TOPIC, topicId}
};

export const delete_topic = (topicId) => {
  return {type: DELETE_TOPIC, topicId}
};