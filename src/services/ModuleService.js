export const findAllModules = () => {
  return fetch("https://wbdv-generic-server.herokuapp.com/api/jhansen/modules")
  .then(response => response.json())
};

export const findModuleForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/jhansen/courses/${courseId}/modules`)
    .then(response => response.json());


export const deleteModule = (moduleId) => {
  return fetch("https://wbdv-generic-server.herokuapp.com/api/jhansen/modules/" + moduleId, {
    method: 'DELETE'
  })
  .then(response => response.json())
};

export const updateModule = (moduleId, newModule) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/jhansen/modules/${moduleId}`, {
      method: 'PUT',
      body: JSON.stringify(newModule),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());

export const createModule = (courseId, module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/jhansen/courses/${courseId}/modules`, {
      method: 'POST',
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());