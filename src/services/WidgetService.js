import {localUrl} from '../config';

const createWidget = (topicId, widget) =>
    fetch(`${localUrl}/topics/${topicId}/widgets`, {
      method: 'POST',
      body: JSON.stringify(widget),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json());

const findWidgetsForTopic = (topicId) =>
    fetch(`${localUrl}/topics/${topicId}/widgets`)
    .then(response => response.json());

const findWidget = (widgetId) =>
    fetch(`${localUrl}/widgets/${widgetId}`)
    .then(response => response.json());

const updateWidget = (widgetId, widget) =>
    fetch(`${localUrl}/widgets/${widgetId}`, {
      method: 'PUT',
      body: JSON.stringify(widget),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json());

const deleteWidget = (widgetId) =>
    fetch(`${localUrl}/widgets/${widgetId}`, {method: 'DELETE'})
    .then(response => response.json());

const reorderUp = (widgetId) =>
    fetch(`${localUrl}/widgets/${widgetId}/reorderUp`)
    .then(response => response.json());

const reorderDown = (widgetId) =>
    fetch(`${localUrl}/widgets/${widgetId}/reorderDown`)
    .then(response => response.json());

export default {
  createWidget,
  findWidgetsForTopic,
  findWidget,
  updateWidget,
  deleteWidget,
  reorderUp,
  reorderDown,
}