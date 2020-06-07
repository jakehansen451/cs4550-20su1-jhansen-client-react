const url = 'https://wbdv-generic-server.herokuapp.com/api/jhansen';

export const createLesson = (moduleId, newLesson) =>
    fetch(`${url}/modules/${moduleId}/lessons`, {
      method: 'POST',
      body: JSON.stringify(newLesson),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());

export const findLessonsForModule = (moduleId) =>
    fetch(`${url}/modules/${moduleId}/lessons`)
    .then(response => response.json());

export const findLesson = (lessonId) =>
    fetch(`${url}/lessons/${lessonId}`)
    .then(response => response.json());

export const updateLesson = (lessonId, lesson) =>
    fetch(`${url}/lessons/${lessonId}`, {
      method: 'PUT',
      body: JSON.stringify(lesson),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());

export const deleteLesson = (lessonId) =>
    fetch(`${url}/lessons/${lessonId}`, {method: 'DELETE'})
    .then(response => response.json());