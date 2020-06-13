// Actions
export const TOGGLE_WIDGET_PREVIEW = 'TOGGLE_WIDGET_PREVIEW';

// Action creators
export const toggle_widget_preview = () => {
  return {type: TOGGLE_WIDGET_PREVIEW}
};

// Reducer
export const widgetPreviewReducer = (widgetPreview = false, action) => {
  switch(action.type) {
    case TOGGLE_WIDGET_PREVIEW:
      return !widgetPreview;
    default:
      return widgetPreview;
  }
};