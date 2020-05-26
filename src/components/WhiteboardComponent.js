import React from 'react'
import CourseManagerContainer from "../containers/CourseManager/CourseManagerContainer";
import CourseEditorContainer from "../containers/CourseEditor/CourseEditorContainer";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import HomeComponent from "./Home/HomeComponent";
import LoginComponent from "./Login/LoginComponent";
import WIPComponent from './Error/WIPComponent';

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

            <Route
                path='/profile/'
                exact
                compoonent={ProfileComponent}/>

            <Route
                path='/login/'
                exact
                component={LoginComponent}/>

            <Route
                path='/wip/'
                exact
                component={WIPComponent}/>

          </div>
        </BrowserRouter>
    )
  }
}

export default WhiteboardComponent