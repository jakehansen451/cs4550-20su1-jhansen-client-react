import LessonService from './LessonService';

const url = 'https://wbdv-generic-server.herokuapp.com/api/jhansen';

const createModule = (courseId, module) =>
    fetch(`${url}/courses/${courseId}/modules`, {
      method: 'POST',
      body: JSON.stringify(module),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json());

const findModulesForCourse = (courseId) =>
    fetch(`${url}/courses/${courseId}/modules`)
    .then(response => response.json());

const findAllModules = () => {
  return fetch(`${url}/modules`)
  .then(response => response.json())
};

const findModule = (moduleId) =>
    fetch(`${url}/modules/${moduleId}`)
    .then(response => response.json());

const updateModule = (moduleId, newModule) =>
    fetch(`${url}/modules/${moduleId}`, {
      method: 'PUT',
      body: JSON.stringify(newModule),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json());

const deleteModule = (moduleId) => {
  LessonService.findLessonsForModule(moduleId)
  .then(lessons => lessons.map(lesson =>
      LessonService.deleteLesson(lesson._id)
  ));
  return fetch(`${url}/modules/${moduleId}`, {method: 'DELETE'})
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