import React from 'react';
import {Link} from "react-router-dom";
import './RegisterComponent.css';

const RegisterComponent = () => {
  return (
      <div>
        <div className="wbdv-title-bar">
          <h1>Register</h1>

          <Link
              className="wbdv-ccancel-btn wbdv-button btn wbdv-green-btn"
              to="/"
          >
            Cancel
          </Link>
        </div>

        <form>
          <div className="form-group wbdv-input-form-row">
            <label htmlFor="usr"
                   className="col-form-label wbdv-input-label">Username</label>

            <input
                className="wbdv-field wbdv-username register-input-field col"
                id="usr"
                type="text"
                placeholder="DwayneJohnson"
                title="Please select a username"
            />
          </div>

          <div className="form-group wbdv-input-form-row">
            <label htmlFor="pwd"
                   className="col-form-label wbdv-input-label">Password</label>

            <input id="pwd"
                   className="wbdv-field wbdv-password col"
                   type="password"
                   placeholder="abc123"
                   title="Please enter a secure password"
            />
          </div>

          <div className="form-group wbdv-input-form-row">
            <label htmlFor="verify-pwd" className="col-form-label wbdv-input-label">Verify
              Password</label>

            <input id="verify-pwd"
                   className="wbdv-field wbdv-password-verify col"
                   type="password"
                   placeholder="abc123"
                   title="Please re-enter your password for verification"
            />
          </div>
        </form>

        <div>
          <Link
              className="wbdv-button wbdv-register btn wbdv-green-btn"
              to='/profile/'
          >
            Register
          </Link>

          <div>
            <Link
                className="wbdv-link wbdv-login"
                to='/login/'
            >
              Already have an account? Click here to log in
            </Link>
          </div>
        </div>
      </div>
  )
};

export default RegisterComponent;