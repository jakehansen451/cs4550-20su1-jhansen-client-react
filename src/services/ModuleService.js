const url = 'https://wbdv-generic-server.herokuapp.com/api/jhansen';

export const createModule = (courseId, module) =>
    fetch(`${url}/courses/${courseId}/modules`, {
      method: 'POST',
      body: JSON.stringify(module),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json());

export const findModuleForCourse = (courseId) =>
    fetch(`${url}/courses/${courseId}/modules`)
    .then(response => response.json());

export const findAllModules = () => {
  return fetch(`${url}/modules`)
  .then(response => response.json())
};

export const findModule = (moduleId) =>
    fetch(`${url}/modules/${moduleId}`)
    .then(response => response.json());

export const updateModule = (moduleId, newModule) =>
    fetch(`${url}/modules/${moduleId}`, {
      method: 'PUT',
      body: JSON.stringify(newModule),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json());

export const deleteModule = (moduleId) => {
  return fetch(`${url}/modules/${moduleId}`, {method: 'DELETE'})
  .then(response => response.json())
};