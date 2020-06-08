import ModuleService from './ModuleService';
const url = "https://wbdv-generic-server.herokuapp.com/api/jhansen";

const createCourse = (course) =>
    fetch(`${url}/courses/`, {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json());

const updateCourse = (courseId, course) =>
    fetch(`${url}/courses/${courseId}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json());

const deleteCourse = (courseId) => {
  ModuleService.findAllModules(courseId)
  .then(modules => modules.map(module =>
    ModuleService.deleteModule(module._id)
  ));
  return fetch(`${url}/courses/${courseId}`, {method: 'DELETE'})
  .then(response => response.json());
};

const findCourseById = (courseId) =>
    fetch(`${url}/courses/${courseId}`)
    .then(response => response.json());

const findAllCourses = () =>
    fetch(`${url}/courses/`)
    .then(response => response.json());

export default {
  createCourse,
  deleteCourse,
  findCourseById,
  findAllCourses,
  updateCourse
}