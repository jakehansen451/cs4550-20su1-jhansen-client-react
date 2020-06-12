// Actions
export const SET_WIDGETS = 'SET_WIDGETS';
export const CREATE_WIDGET = 'CREATE_WIDGET';
export const FIND_WIDGETS_FOR_TOPIC = 'FIND_WIDGETS_FOR_TOPIC';
export const FIND_WIDGET = 'FIND_WIDGET';
export const UPDATE_WIDGET = 'UPDATE_WIDGET';
export const DELETE_WIDGET = 'DELETE_WIDGET';

// Action creators
export const set_widgets = (widgets) => {
  return {type: SET_WIDGETS, widgets}
};

export const create_widget = (widget) => {
  return {type: CREATE_WIDGET, widget}
};

export const find_widgets_for_topic = (topicId) => {
  return {type: FIND_WIDGETS_FOR_TOPIC, topicId}
};

export const find_widget = (widgetId) => {
  return {type: FIND_WIDGET, widgetId}
};

export const update_widget = (widget) => {
  return {type: UPDATE_WIDGET, widget}
};

export const delete_widget = (widgetId) => {
  return {type: DELETE_WIDGET, widgetId}
};

// Reducers
export const widgetReducer = (widgets = [], action) => {
  switch(action.type) {
    case SET_WIDGETS:
      return action.widgets;
    case CREATE_WIDGET:
      return [...widgets, action.widget];
    case FIND_WIDGETS_FOR_TOPIC:
      return widgets.filter(widget => widget.topicId === action.topicId);
    case FIND_WIDGET:
      return widgets.find(widget => widget._id === action.widgetId);
    case UPDATE_WIDGET:
      return [...widgets].map(widget =>
          widget._id === action.widget._id ? action.widget : widget);
    case DELETE_WIDGET:
      return widgets.filter(widget => widget._id !== action.widgetId);
    default:
      return widgets;
  }
};