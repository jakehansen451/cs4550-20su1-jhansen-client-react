import React from 'react'
import CourseManagerContainer from "../containers/CourseManager/CourseManagerContainer";
import CourseEditorContainer from "../containers/CourseEditor/CourseEditorContainer";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import HomeComponent from "./Home/HomeComponent";
import LoginComponent from "./LoginComponent";

class WhiteboardComponent extends React.Component {
  render() {
    return(
        <BrowserRouter>
          <div>
            <Route
                path="/:url*"
                exact
                strict
                render={
                  props => <Redirect to={`${props.location.pathname}/`}/>
                }
            />

            <Route path="/login" exact={true} component={LoginComponent}/>

            {/*TODO: port over registraion, profile components*/}

            <Route
                path='/'
                exact
                component={HomeComponent}
            />

            <Route
                path='/courses/'
                exact
                strict
                render={
                  props => <Redirect to={`${props.location.pathname}table/`}/>
                }
            />

            <Route
                path='/courses/:layout/'
                exact
                component={CourseManagerContainer}/>

            <Route
                path='/editor/*'
                exact
                component={CourseEditorContainer}/>

          </div>
        </BrowserRouter>
    )
  }
}

export default WhiteboardComponent