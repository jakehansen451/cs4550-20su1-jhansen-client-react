// Actions
export const SELECT_WIDGET = 'SELECT_WIDGET';

// Action creators
export const select_widget = (widget) => {
  return { type: SELECT_WIDGET, widget }
};

// Reducer
export const selectedWidgetReducer = (selected_widget = {}, action) => {
  switch (action.type) {
    case SELECT_WIDGET:
      return action.widget;
    default:
      return selected_widget;
  }
};