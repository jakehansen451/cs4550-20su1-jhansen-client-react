import React from "react";

const LoginComponent = () => {
  return (
      <div>
        <div className="title-bar">
          <h1>Sign In</h1>

          <Link
              className="cancel-btn wbdv-button btn green-btn"
              to='/'
          >
            Cancel
          </Link>
        </div>
        <form>
          <div className="form-group input-form-row">
            <label htmlFor="usr"
                   className="col-form-label input-label">Username</label>

            <input
                className="wbdv-field wbdv-username col"
                id="usr"
                type="text"
                placeholder="DwayneJohnson"
                title="Use this username to login"
            />
          </div>

          <div className="form-group input-form-row">
            <label htmlFor="pwd"
                   className="col-form-label input-label">Password</label>

            <input
                id="pwd"
                className="wbdv-field wbdv-password col"
                type="password"
                placeholder="abc123"
                title="Please enter your password"
            />
          </div>
        </form>

        <div>
          <Link
              className="wbdv-button wbdv-login btn green-btn"
              to='/profile/'
          >
            Login
          </Link>

          <div className="wbdv-login-zone-links">
            <Link
                className="wbdv-link wbdv-forgot-password"
                to='/error/'
            >
              Forgot your password?
            </Link>

            <Link
                className="wbdv-link wbdv-register"
                to='/register/'
            >
              Don't have an account yet? Register here
            </Link>
          </div>
        </div>
      </div>
  )
};

export default LoginComponent