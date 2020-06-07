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

export const update_lesson = (lessonId, lesson) => {
  return {type: UPDATE_LESSON, lessonId}
};

export const delete_lesson = (lessonId) => {
  return {type: DELETE_LESSON, lessonId}
};

// Reducers
export const lessonReducer = (lessons = [], action) => {
  switch(action.type) {
    case CREATE_LESSON:
      return [...lessons, action.lesson];
    case FIND_LESSONS_FOR_COURSE:
      return lessons.filter(lesson => lesson.moduleId === action.moduleId);
    case FIND_LESSON:
      return lessons.find(lesson => lesson._id === action.lessonId);
    case UPDATE_LESSON:
      return [...(lessons.filter(lesson => lesson._id === action.lessonId)), action.lesson];
    case DELETE_LESSON:
      return lessons.filter(lesson => lesson._id !== action.lessonId);
    default:
      return lessons;
  }
};