import { moduleReducer } from "./ModuleReducer";
import { lessonReducer} from "./LessonReducer";
import { topicReducer } from "./TopicReducer";

const startState = {
  modules: [],
  lessons: [],
  topics: []
};

export const rootReducer = (state = startState, action) => {
  return {
    modules: moduleReducer(state.modules, action),
    lessons: lessonReducer(state.lessons, action),
    topics: topicReducer(state.topics, action)
  }
};