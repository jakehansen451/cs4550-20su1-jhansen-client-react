import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../../../../../../styles.css';
import './HeadingWidgetComponent.css';


export default class HeadingWidgetComponent extends React.Component {

  renderWidgetBody = () => {
    const name = this.props.widget.name;
    return(
        <div
            id={name}
            className="collapse show wbdv-widget-body"
            aria-labelledby={name.concat('-heading')}
            data-parent="#widget-accordion"
        >
          <form>
            <div className="form-group wbdv-widget-edit-row">
              <label className="col-form-label wbdv-widget-input-label" htmlFor="widget-name-input">
                Widget name:
              </label>
              <input
                  className="wbdv-widget-input-field wbdv-field col"
                  id="widget-name-input"
                  type="text"
                  placeholder="Heading widget"
              />
            </div>
            <div className="form-group wbdv-widget-edit-row">
              <label className="col-form-label wbdv-widget-input-label">
                Widget type:
              </label>
              <select className="wbdv-widget-input-field wbdv-field col">
                <option value="Heading">Heading</option>
                <option value="Widget type 2">Widget type 2</option>
                <option value="Widget type 3">Widget type 3</option>
              </select>
            </div>
          </form>
          <form className="wbdv-heading-widget-edit">
            <div className="wbdv-widget-edit-heading">Heading widget</div>
            <div className="wbdv-widget-edit-row">
              <label className="col-form-label wbdv-widget-input-label" htmlFor="heading-body-input">
                Heading text:
              </label>
              <input
                  className="wbdv-widget-input-field wbdv-field col"
                  id="heading-body-input"
                  type="text"
                  placeholder="Put your heading text here"
              />
            </div>
          </form>
          <h5>Widget Preview:</h5>
          <div className="wbdv-heading-widget-preview">
            <h2>Put your heading text here</h2>
          </div>
        </div>
    )};

  render() {
    const name = this.props.widget.name;
    return (
        <div className="card">
          <div
              className="card-header wbdv-widget-heading-bar"
              id={name.concat('-heading')}
          >
            <button
                className="btn btn-link wbdv-clickable-label"
                type="button"
                data-toggle="collapse"
                data-target={'#'.concat(name)}
                aria-expanded="true"
                aria-controls={name}
            >
              {name}
            </button>
            <div>
              <div className="btn-group">
                <button className="btn btn-light">
                  <FontAwesomeIcon icon={faArrowUp}/>
                </button>
                <button className="btn btn-light">
                  <FontAwesomeIcon icon={faArrowDown}/>
                </button>
              </div>
              <button
                  className="wbdv-icon-link wbdv-btn wbdv-delete-btn"
                  onClick={() => alert('Pretending to delete widget')}
              >
                X
              </button>
            </div>
          </div>
          {this.props.active ? this.renderWidgetBody() : null}

        </div>
    )
  }
}