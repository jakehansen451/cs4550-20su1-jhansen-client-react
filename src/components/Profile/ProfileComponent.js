import React from 'react';
import {Link} from "react-router-dom";
import './ProfileComponent.css';

const ProfileComponent = () => {
  return (
      <div>
        <div>
          <div className="wbdv-title-bar wbdv-profile-title-bar">
            <h1>Profile</h1>
          </div>

          <div className="wbdv-message alert wbdv-green-alert" role="alert">
            Profile saved successfully.
          </div>
        </div>

        <form>
          <div className="form-group wbdv-input-form-row">
            <label htmlFor="usr"
                   className="col-form-label wbdv-input-label">Username</label>

            <input
                className="wbdv-field wbdv-username col"
                id="usr"
                value="DwayneJohnson"
                type="text"
                placeholder="DwayneJohnson"
                title="Use this username to login"
                disabled
            />
          </div>

          <div className="form-group wbdv-input-form-row">
            <label htmlFor="pwd"
                   className="col-form-label wbdv-input-label">Password</label>

            <input
                className="wbdv-field wbdv-password col"
                id="pwd"
                type="password"
                placeholder="abc123"
            />
          </div>

          <div className="form-group wbdv-input-form-row">
            <label htmlFor="phone"
                   className="col-form-label wbdv-input-label">Phone</label>

            <input
                className="wbdv-field wbdv-phone col"
                id="phone"
                type="tel"
                placeholder="(123) 456-7890"
            />
          </div>

          <div className="form-group wbdv-input-form-row">
            <label htmlFor="email"
                   className="col-form-label wbdv-input-label">Email</label>

            <input
                className="wbdv-field wbdv-email col"
                id="email"
                type="email"
                placeholder="<last_name>.<first_initial>@husky.neu.edu"
            />
          </div>

          <div className="form-group wbdv-input-form-row">
            <label htmlFor="dob" className="col-form-label wbdv-input-label">Date of
              Birth</label>

            <input
                className="wbdv-field wbdv-dob col"
                id="dob"
                type="date"
            />
          </div>

          <div className="form-group wbdv-input-form-row">
            <label htmlFor="role"
                   className="col-form-label wbdv-input-label">Role</label>

            <select
                className="wbdv-field wbdv-role col"
                id="role"
            >
              <option value="Faculty">Faculty</option>

              <option value="Student">Student</option>

              <option value="Admin">Admin</option>
            </select>
          </div>
        </form>

        <button
            className="wbdv-button wbdv-update btn wbdv-green-btn"
        >
          Update Profile
        </button>

        <Link
            to="/"
            className="wbdv-button wbdv-logout btn wbdv-red-btn"
        >
          Logout
        </Link>
      </div>
  )
};

export default ProfileComponent;