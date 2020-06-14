import {herokuUrl} from '../config';

const createWidget = (topicId, widget) =>
    fetch(`${herokuUrl}/topics/${topicId}/widgets`, {
      method: 'POST',
      body: JSON.stringify(widget),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json());

const findWidgetsForTopic = (topicId) =>
    fetch(`${herokuUrl}/topics/${topicId}/widgets`)
    .then(response => response.json());

const findWidget = (widgetId) =>
    fetch(`${herokuUrl}/widgets/${widgetId}`)
    .then(response => response.json());

const updateWidget = (widgetId, widget) =>
    fetch(`${herokuUrl}/widgets/${widgetId}`, {
      method: 'PUT',
      body: JSON.stringify(widget),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json());

const deleteWidget = (widgetId) =>
    fetch(`${herokuUrl}/widgets/${widgetId}`, {method: 'DELETE'})
    .then(response => response.json());

const reorderUp = (widgetId) =>
    fetch(`${herokuUrl}/widgets/${widgetId}/reorderUp`)
    .then(response => response.json());

const reorderDown = (widgetId) =>
    fetch(`${herokuUrl}/widgets/${widgetId}/reorderDown`)
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