// Actions
export const SELECT_LESSON = 'SELECT_LESSON';

// Action creators
export const select_lesson = (lesson) => {
  return { type: SELECT_LESSON, lesson }
};

// Reducer
export const selectedLessonReducer = (selected_lesson = {}, action) => {
  switch (action.type) {
    case SELECT_LESSON:
      return action.lesson;
    default:
      return selected_lesson;
  }
};