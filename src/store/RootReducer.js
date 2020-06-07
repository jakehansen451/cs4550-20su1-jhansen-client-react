import { selectedCourseReducer } from "./SelectedCourseReducer";
import { moduleReducer } from "./ModuleReducer";
import { selectedModuleReducer } from "./SelectedModuleReducer";
import { lessonReducer} from "./LessonReducer";
import { selectedLessonReducer } from "./SelectedLessonReducer";
import { topicReducer } from "./TopicReducer";
import { selectedTopicReducer } from "./SelectedTopicReducer";

export const rootReducer = (state = {}, action) => {
  return {
    selected_course: selectedCourseReducer(state.selected_course, action),
    modules: moduleReducer(state.modules, action),
    selected_module: selectedModuleReducer(state.selected_module, action),
    lessons: lessonReducer(state.lessons, action),
    selected_lesson: selectedLessonReducer(state.selected_lesson, action),
    topics: topicReducer(state.topics, action),
    selected_topic: selectedTopicReducer(state.selected_topic, action),
  }
};