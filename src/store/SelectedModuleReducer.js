// Actions
export const SELECT_MODULE = 'SELECT_MODULE';

// Action creators
export const select_module = (module) => {
  return { type: SELECT_MODULE, module }
};

// Reducer
export const selectedModuleReducer = (selected_module = {}, action) => {
  switch (action.type) {
    case SELECT_MODULE:
      return action.module;
    default:
      return selected_module;
  }
};