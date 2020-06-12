import { genericServerUrl } from '../config';

const createTopic = (lessonId, topic) =>
    fetch(`${genericServerUrl}/lessons/${lessonId}/topics`, {
      method: 'POST',
      body: JSON.stringify(topic),
      headers: { 'content-type': 'application/json' }
    }).then(response => response.json());

const findTopicsForLesson = (lessonId) =>
    fetch(`${genericServerUrl}/lessons/${lessonId}/topics`)
    .then(response => response.json());

const findTopic = (topicId) =>
    fetch(`${genericServerUrl}/topics/${topicId}`)
    .then(response => response.json());

const updateTopic = (topicId, topic) =>
    fetch(`${genericServerUrl}/topics/${topicId}`, {
      method: 'PUT',
      body: JSON.stringify(topic),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json());

const deleteTopic = (topicId) =>
    fetch(`${genericServerUrl}/topics/${topicId}`, {method: 'DELETE'})
    .then(response => response.json());

export default {
  createTopic,
  findTopicsForLesson,
  findTopic,
  updateTopic,
  deleteTopic
}