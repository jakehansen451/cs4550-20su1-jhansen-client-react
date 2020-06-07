import { moduleReducer } from "./ModuleReducer";
import { selectedModuleReducer } from "./SelectedModuleReducer";
import { lessonReducer} from "./LessonReducer";
import { selectedLessonReducer } from "./SelectedLessonReducer";
import { topicReducer } from "./TopicReducer";
import { selectedTopicReducer } from "./SelectedTopicReducer";

const startState = {
  modules: [],
  lessons: [],
  topics: []
};

export const rootReducer = (state = startState, action) => {
  return {
    modules: moduleReducer(state.modules, action),
    selected_module: selectedModuleReducer(state.selected_module, action),
    lessons: lessonReducer(state.lessons, action),
    selected_lesson: selectedLessonReducer(state.selected_lesson, action),
    topics: topicReducer(state.topics, action),
    selected_topic: selectedTopicReducer(state.selected_topic, action),
  }
};