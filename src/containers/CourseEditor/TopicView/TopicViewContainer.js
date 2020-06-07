import React from 'react';
import TopicPillsComponent
  from '../../../components/CourseEditor/TopicView/TopicPills/TopicPillsComponent';
import WidgetContainer from "./WidgetContainer/WidgetContainer";

const TopicViewContainer = () => {
  return (
      <div>
        <TopicPillsComponent/>
        <WidgetContainer/>
      </div>
  )
};

export default TopicViewContainer;