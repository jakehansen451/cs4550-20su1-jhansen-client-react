import React, {Component} from 'react'
import CourseManagerContainer from "../containers/CourseManager/CourseManagerContainer";
import CourseEditorContainer from "../containers/CourseEditor/CourseEditorContainer";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import HomeComponent from "./Home/HomeComponent";
import LoginComponent from "./Login/LoginComponent";
import WIPComponent from './Error/WIPComponent';
import RegisterComponent from './Register/RegisterComponent';
import ProfileComponent from './Profile/ProfileComponent';

class WhiteboardComponent extends Component {
  constructor(props) {
    super(props);
  }

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
                path='/editor/:id'
                exact
                component={CourseEditorContainer}/>

            <Route
                path='/profile/'
                exact
                component={ProfileComponent}/>

            <Route
                path='/login/'
                exact
                component={LoginComponent}/>

            <Route
                path='/register/'
                exact
                component={RegisterComponent}/>

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