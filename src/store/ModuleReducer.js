export const SET_MODULES = 'SET_MODULES';
export const CREATE_MODULE = 'CREATE_MODULE';
export const FIND_MODULES_FOR_COURSE = 'FIND_MODULES_FOR_COURSE';
export const FIND_MODULE = 'FIND_MODULE';
export const UPDATE_MODULE = 'UPDATE_MODULE';
export const DELETE_MODULE = 'DELETE_MODULE';

// Action creators
export const set_modules = (modules) => {
  return {type: SET_MODULES, modules}
};

export const create_module = (module) => {
  return {type: CREATE_MODULE, module}
};

export const find_modules_for_course = (courseId) => {
  return {type: FIND_MODULES_FOR_COURSE, courseId}
};

export const find_module = (moduleId) => {
  return {type: FIND_MODULE, moduleId}
};

export const update_module = (module) => {
  return {type: UPDATE_MODULE, module}
};

export const delete_module = (moduleId) => {
  return {type: DELETE_MODULE, moduleId}
};

// Reducer
export const moduleReducer = (modules = [], action) => {
  switch (action.type) {
    case SET_MODULES:
      return action.modules;
    case CREATE_MODULE:
      return [...modules, action.module];
    case FIND_MODULES_FOR_COURSE:
      return modules.filter(module => module.courseId === action.courseId);
    case FIND_MODULE:
      return modules.find(module => module._id === action.moduleId);
    case UPDATE_MODULE:
      return [...modules].map(module =>
          module._id === action.module._id ? action.module : module);
    case DELETE_MODULE:
      return modules.filter(module => module._id !== action.moduleId);
    default:
      return modules;
  }
};