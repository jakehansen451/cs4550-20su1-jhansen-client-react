import React from "react";
import ModuleListComponent from "../ModuleListComponent";
import LessonTabsComponent from "../LessonTabsComponent";
import {Link} from "react-router-dom";

// stateless component
const CourseEditorComponent = () => {
  return(
      <div>
        <Link to="/courses/">
          Back
        </Link>
        <h2>Course Editor</h2>

        <div className="row">
          <div className="col-4">
            <ModuleListComponent/>
          </div>
          <div className="col-8">
            <LessonTabsComponent/>
            <h3>Topic Pills</h3>
            <h3>Widget List</h3>
          </div>
        </div>
      </div>
  )
};

export default CourseEditorComponent;