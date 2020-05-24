import React from 'react'
import CourseManagerContainer from "../containers/CourseManager/CourseManagerContainer";
import CourseEditorComponent from "./CourseEditor/CourseEditorComponent";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./Home/HomeComponent";
import LoginComponent from "./LoginComponent";

class WhiteboardComponent extends React.Component {
  render() {
    return(
        <BrowserRouter>
          <div>
            <Route path="/login" exact={true} component={LoginComponent}/>

            {/*TODO: port over registraion, profile components*/}

            <Route
                path='/'
                exact={true}
                component={HomeComponent}
            />

            <Route
                path='/courses'
                exact={true}
                component={CourseManagerContainer}/>

            <Route
                path='/:layout/courses'
                exact={true}
                component={CourseManagerContainer}/>

            <Route
                path='/editor/*'
                exact={true}
                component={CourseEditorComponent}/>

          </div>
        </BrowserRouter>
    )
  }
}

export default WhiteboardComponent