const url = 'https://wbdv-generic-server.herokuapp.com/api/jhansen';

export const createTopic = (lessonId, topic) =>
    fetch(`${url}/lessons/${lessonId}`, {
      method: 'POST',
      body: JSON.stringify(topic),
      headers: { 'content-type': 'application/json' }
    }).then(response => response.json());

export const findTopicsForLesson = (lessonId) =>
    fetch(`${url}/lessons/${lessonId}`)
    .then(response => response.json());

export const findTopic = (topicId) =>
    fetch(`${url}/topics/${topicId}`)
    .then(response => response.json());

export const updateTopic = (topicId, topic) =>
    fetch(`${url}/topics/${topicId}`, {
      method: 'PUT',
      body: JSON.stringify(topic),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json());

export const deleteTopic = (topicId) =>
    fetch(`${url}/topics/${topicId}`, {method: 'DELETE'})
    .then(response => response.json());