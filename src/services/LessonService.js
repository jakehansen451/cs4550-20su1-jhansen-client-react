import TopicService from './TopicService';
import { url } from '../config';

const createLesson = (moduleId, newLesson) =>
    fetch(`${url}/modules/${moduleId}/lessons`, {
      method: 'POST',
      body: JSON.stringify(newLesson),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());

const findLessonsForModule = (moduleId) =>
    fetch(`${url}/modules/${moduleId}/lessons`)
    .then(response => response.json());

const findLesson = (lessonId) =>
    fetch(`${url}/lessons/${lessonId}`)
    .then(response => response.json());

const updateLesson = (lessonId, lesson) =>
    fetch(`${url}/lessons/${lessonId}`, {
      method: 'PUT',
      body: JSON.stringify(lesson),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());

const deleteLesson = (lessonId) => {
  TopicService.findTopicsForLesson(lessonId)
  .then(topics => topics.map(topic =>
        TopicService.deleteTopic(topic._id)
  ));
  return fetch(`${url}/lessons/${lessonId}`, {method: 'DELETE'})
  .then(response => response.json());
};

export default {
  createLesson,
  findLessonsForModule,
  findLesson,
  updateLesson,
  deleteLesson
}