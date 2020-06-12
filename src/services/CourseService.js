import ModuleService from './ModuleService';
import { genericServerUrl } from '../config';

const createCourse = (course) =>
    fetch(`${genericServerUrl}/courses/`, {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json());

const updateCourse = (courseId, course) =>
    fetch(`${genericServerUrl}/courses/${courseId}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json());

const deleteCourse = (courseId) => {
  ModuleService.findAllModules(courseId)
  .then(modules => modules.map(module =>
    ModuleService.deleteModule(module._id)
  ));
  return fetch(`${genericServerUrl}/courses/${courseId}`, {method: 'DELETE'})
  .then(response => response.json());
};

const findCourseById = (courseId) =>
    fetch(`${genericServerUrl}/courses/${courseId}`)
    .then(response => response.json());

const findAllCourses = () =>
    fetch(`${genericServerUrl}/courses/`)
    .then(response => response.json());

export default {
  createCourse,
  deleteCourse,
  findCourseById,
  findAllCourses,
  updateCourse
}