import React from 'react';
import './RegisterComponent.css';

const RegisterComponent = () => {
  return (
      <div>
        <div className="title-bar">
          <h1>Register</h1>

          <a
              className="cancel-btn wbdv-button btn green-btn"
              href="../index.html"
          >
            Cancel
          </a>
        </div>

        <form className="register-form">
          <div className="form-group input-form-row">
            <label htmlFor="usr"
                   className="col-form-label input-label">Username</label>

            <input
                className="wbdv-field wbdv-username register-input-field col"
                id="usr"
                type="text"
                placeholder="DwayneJohnson"
                title="Please select a username"
            />
          </div>

          <div className="form-group input-form-row">
            <label htmlFor="pwd"
                   className="col-form-label input-label">Password</label>

            <input id="pwd"
                   className="wbdv-field wbdv-password col"
                   type="password"
                   placeholder="abc123"
                   title="Please enter a secure password"
            />
          </div>

          <div className="form-group input-form-row">
            <label htmlFor="verify-pwd" className="col-form-label input-label">Verify
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
          <a
              href="../profile/profile.template.client.html"
              className="wbdv-button wbdv-register btn green-btn"
          >
            Register
          </a>

          <div>
            <a
                href="../login/login.template.client.html"
                className="wbdv-link wbdv-login"
            >
              Already have an account? Click here to log in
            </a>
          </div>
        </div>
      </div>
  )
};

export default RegisterComponent;