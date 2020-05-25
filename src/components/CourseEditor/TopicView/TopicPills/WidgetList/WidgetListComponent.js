import React from 'react';
import '../../../../../styles.css';
import './WidgetListComponent.css';

const WidgetListComponent = (props) => {
  return (
      <div className="accordion" id="widget-accordion">
        <div className="card">
          <div className="card-header widget-heading-bar" id="widget2-heading">
            <button
                className="btn btn-link widget-clickable-label"
                type="button"
                data-toggle="collapse"
                data-target="#widget2"
                aria-expanded="true"
                aria-controls="widget2"
            >
              Widget 2
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
              id="widget2"
              className="collapse"
              aria-labelledby="widget2-heading"
              data-parent="#widget-accordion"
          >
            <div>
              Widget 2 body
            </div>
          </div>
        </div>
      </div>
  )
};

export default WidgetListComponent;
