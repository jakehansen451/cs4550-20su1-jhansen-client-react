// Actions
export const CREATE_LESSON = 'CREATE_LESSON';
export const FIND_LESSONS_FOR_COURSE = 'FIND_LESSONS_FOR_COURSE';
export const FIND_LESSON = 'FIND_LESSON';
export const UPDATE_LESSON = 'UPDATE_LESSON';
export const DELETE_LESSON = 'DELETE_LESSON';

// Action creators
export const create_lesson = (moduleId, lesson) => {
  return {type: CREATE_LESSON, moduleId, lesson}
};

export const find_lessons_for_module = (moduleId) => {
  return {type: FIND_LESSONS_FOR_COURSE, moduleId}
};

export const find_lesson = (lessonId) => {
  return {type: FIND_LESSON, lessonId}
};

export const update_lesson = (lessonId) => {
  return {type: UPDATE_LESSON, lessonId}
};

export const delete_lesson = (lessonId) => {
  return {type: DELETE_LESSON, lessonId}
};