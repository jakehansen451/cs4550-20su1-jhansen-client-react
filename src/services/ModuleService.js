import LessonService from './LessonService';
import { genericServerUrl } from '../config';

const createModule = (courseId, module) =>
    fetch(`${genericServerUrl}/courses/${courseId}/modules`, {
      method: 'POST',
      body: JSON.stringify(module),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json());

const findModulesForCourse = (courseId) =>
    fetch(`${genericServerUrl}/courses/${courseId}/modules`)
    .then(response => response.json());

const findAllModules = () => {
  return fetch(`${genericServerUrl}/modules`)
  .then(response => response.json())
};

const findModule = (moduleId) =>
    fetch(`${genericServerUrl}/modules/${moduleId}`)
    .then(response => response.json());

const updateModule = (moduleId, newModule) =>
    fetch(`${genericServerUrl}/modules/${moduleId}`, {
      method: 'PUT',
      body: JSON.stringify(newModule),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json());

const deleteModule = (moduleId) => {
  LessonService.findLessonsForModule(moduleId)
  .then(lessons => lessons.map(lesson =>
      LessonService.deleteLesson(lesson._id)
  ));
  return fetch(`${genericServerUrl}/modules/${moduleId}`, {method: 'DELETE'})
  .then(response => response.json())
};

export default {
  createModule,
  findModulesForCourse,
  findAllModules,
  findModule,
  updateModule,
  deleteModule
}