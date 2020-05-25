import React from 'react';

export default class HeadingWidgetComponent extends React.Component {

  render() {
    return (
        <div className="card">
          <div className="card-header widget-heading-bar" id="widget1-heading">
            <button
                className="btn btn-link widget-clickable-label"
                typeg="button"
                data-toggle="collapse"
                data-target="#widget1"
                aria-expanded="true"
                aria-controls="widget1"
            >
              Heading widget
            </button>
            <div>
              <div className="btn-group">
                <button className="fa fa-arrow-up btn btn-light"></button>
                <button className="fa fa-arrow-down btn btn-light"></button>
              </div>
              <a
                  className="wbdv-icon-link delete-btn"
                  href="#"
              >X</a>
            </div>
          </div>
          <div
              id="widget1"
              className="collapse show widget-body"
              aria-labelledby="widget1-heading"
              data-parent="#widget-accordion"
          >
            <form>
              <div className="form-group widget-edit-row">
                <label className="col-form-label widget-wbdv-input-label" htmlFor="widget-name-input">
                  Widget name:
                </label>
                <input
                    className="widget-input-field wbdv-field col"
                    id="widget-name-input"
                    type="text"
                    placeholder="Heading widget"
                />
              </div>
              <div className="form-group widget-edit-row">
                <label className="col-form-label widget-wbdv-input-label">
                  Widget type:
                </label>
                <select className="widget-input-field wbdv-field col">
                  <option value="Heading">Heading</option>
                  <option value="Widget type 2">Widget type 2</option>
                  <option value="Widget type 3">Widget type 3</option>
                </select>
              </div>
            </form>
            <form className="heading-widget-edit">
              <div className="widget-edit-heading">Heading widget</div>
              <div className="widget-edit-row">
                <label className="col-form-label widget-wbdv-input-label" htmlFor="heading-body-input">
                  Heading text:
                </label>
                <input
                    className="widget-input-field wbdv-field col"
                    id="heading-body-input"
                    type="text"
                    placeholder="Put your heading text here"
                />
              </div>
            </form>
            <h5>Widget Preview:</h5>
            <div className="heading-widget-preview">
              <h2>Put your heading text here</h2>
            </div>
          </div>
        </div>
    )
  }
}