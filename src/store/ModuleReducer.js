// Actions
export const CREATE_MODULE = 'CREATE_MODULE';
export const FIND_MODULES_FOR_COURSE = 'FIND_MODULES_FOR_COURSE';
export const FIND_MODULE = 'FIND_MODULE';
export const UPDATE_MODULE = 'UPDATE_MODULE';
export const DELETE_MODULE = 'DELETE_MODULE';

// Action creators
export const create_module = (module) => {
  return {type: CREATE_MODULE, module}
};

export const find_modules_for_course = (courseId) => {
  return {type: FIND_MODULES_FOR_COURSE, courseId}
};

export const find_module = (moduleId) => {
  return {type: FIND_MODULE, moduleId}
};

export const update_module = (moduleId) => {
  return {type: UPDATE_MODULE, moduleId}
};

export const delete_module = (moduleId) => {
  return {type: DELETE_MODULE, moduleId}
};