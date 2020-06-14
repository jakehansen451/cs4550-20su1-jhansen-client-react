import React from 'react';
import WidgetFormComponent from "./WidgetFormComponent";
import '../../../../../../styles.css';
import './HeadingWidgetComponent.css';
import './WidgetStyles.css';
import connect from "react-redux/es/connect/connect";
import WidgetService from "../../../../../../services/WidgetService";
import {update_widget} from "../../../../../../store/WidgetReducer";

class HeadingWidgetComponent extends React.Component {

  state = {
    text: this.props.widget.text || 'Put your heading text here',
  };

  updateHeadingSize = (size) => {
    WidgetService.updateWidget(this.props.widget._id,
        {...this.props.widget, size})
    .then(updatedWidget => this.props.updateWidget(updatedWidget));
  };

  updateHeadingText = () => {
    WidgetService.updateWidget(this.props.widget._id,
        {...this.props.widget, text: this.state.text})
    .then(updatedWidget => this.props.updateWidget(updatedWidget));
  };

  generatePreview = (size, text) => {
    switch(this.props.widget.size) {
      case 2:
        return <h2>{text}</h2>;
      case 3:
        return <h3>{text}</h3>;
      case 4:
        return <h4>{text}</h4>;
      case 5:
        return <h5>{text}</h5>;
      case 6:
        return <h6>{text}</h6>;
      default:
        return <h1>{text}</h1>;
    }
  };

  render() {
    const name = this.props.widget.name;
    return (
        this.props.active &&
        <div
            id={name}
            className="wbdv-widget-body"
        >
          {!this.props.widget_preview &&
          <div>
            <WidgetFormComponent/>
            <form className="wbdv-widget-edit">
              <div className="wbdv-widget-type">Heading widget</div>
              <div className="wbdv-widget-edit-row">
                <label className="col-form-label wbdv-widget-input-label"
                       htmlFor="heading-body-input">
                  Heading text:
                </label>
                <input
                    className="wbdv-widget-input-field wbdv-field col"
                    type="text"
                    placeholder="Put your heading text here"
                    onChange={(e) => this.setState({text: e.target.value})}
                    onBlur={this.updateHeadingText}
                    defaultValue={this.state.text}
                />
              </div>
              <div className='wbdv-widget-edit-row'>
                <label
                    className="col-form-label wbdv-widget-input-label"
                    htmlFor='size-dropdown'
                >
                  Size:
                </label>
                <select
                    id='size-dropdown'
                    className='wbdv-widget-input-field wbdv-field'
                    onChange={(e) => this.updateHeadingSize(e.target.value)}
                    defaultValue={this.props.widget.size || 1}
                >
                  <option value='1'>Heading 1</option>
                  <option value='2'>Heading 2</option>
                  <option value='3'>Heading 3</option>
                  <option value='4'>Heading 4</option>
                  <option value='5'>Heading 5</option>
                  <option value='6'>Heading 6</option>
                </select>
              </div>
            </form>
            <h5>Widget Preview:</h5>
          </div>
          }
          <div className="wbdv-widget-preview">
            {this.generatePreview(this.props.widget.size, this.state.text)}
          </div>
        </div>
    )
  };
}

const mapStateToProps = (state) => ({
  widget_preview: state.widget_preview,
});

const mapDispatchToProps = (dispatch) => ({
  updateWidget: (widget) => dispatch(update_widget(widget)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    HeadingWidgetComponent);