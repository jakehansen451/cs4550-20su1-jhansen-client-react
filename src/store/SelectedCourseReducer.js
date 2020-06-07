// Actions
export const SELECT_COURSE = 'SELECT_COURSE';

// Action creators
export const select_course = (course) => {
  return {type: SELECT_COURSE, course}
};

// Reducer
export const selectedCourseReducer = (selected_course = {}, action) => {
  switch(action.type) {
    case SELECT_COURSE:
      return action.course;
    default:
      return selected_course;
  }
};