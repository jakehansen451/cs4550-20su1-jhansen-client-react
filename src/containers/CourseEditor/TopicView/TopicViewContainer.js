import React from 'react';
import TopicPillsComponent
  from '../../../components/CourseEditor/LessonTabs/TopicPills/TopicPillsComponent';
import WidgetContainer from "./WidgetContainer/WidgetContainer";

const TopicViewContainer = (props) => {
  return (
      <div>
        <TopicPillsComponent
            topics={props.topics}
        />
        <WidgetContainer/>
      </div>
  )
};

export default TopicViewContainer;