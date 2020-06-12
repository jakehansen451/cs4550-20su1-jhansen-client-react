import { url } from '../config';

const createWidget = (topicId, widget) =>
    fetch(`${url}/topics/${topicId}/widgets`, {
      method: 'POST',
      body: JSON.stringify(widget),
      headers: { 'content-type': 'application/json' }
    }).then(response => response.json());

const findWidgetsForTopic = (topicId) =>
    fetch(`${url}/topics/${topicId}/widgets`)
    .then(response => response.json());

const findWidget = (widgetId) =>
    fetch(`${url}/widgets/${widgetId}`)
    .then(response => response.json());

const updateWidget = (widgetId, widget) =>
    fetch(`${url}/widgets/${widgetId}`, {
      method: 'PUT',
      body: JSON.stringify(widget),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json());

const deleteWidget = (widgetId) =>
    fetch(`${url}/widgets/${widgetId}`, {method: 'DELETE'})
    .then(response => response.json());

export default {
  createWidget,
  findWidgetsForTopic,
  findWidget,
  updateWidget,
  deleteWidget
}