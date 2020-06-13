import React from 'react';
import {connect} from 'react-redux';
import WidgetFormComponent from "./WidgetFormComponent";
import '../../../../../../styles.css';
import './WidgetStyles.css';
import './ParagraphWidgetComponent.css';
import WidgetService from "../../../../../../services/WidgetService";

class ParagraphWidgetComponent extends React.Component {
  node = React.createRef();

  state = {
    text: this.props.widget.text || 'Paragraph text',
  };

  componentDidUpdate() {
    if (this.node &&
        this.node.current &&
        this.node.current.innerText !== this.state.text) {
      this.node.current.innerText = this.state.text;
    }
  }

  saveText = () => {
    WidgetService.updateWidget(this.props.widget._id,
        {...this.props.widget, text: this.state.text});
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
              <div className="wbdv-widget-type">Paragraph widget</div>
              <div className='wbdv-paragraph-input-wrapper'>
                <div
                    contentEditable
                    ref={this.node}
                    className="wbdv-paragraph-input-field wbdv-field col"
                    type="text"
                    onInput={(e) => this.setState(
                        {text: e.target.innerText})}
                    onBlur={this.saveText}
                />
              </div>
            </form>
            <h4>Widget Preview:</h4>
          </div>
          }
          <div className="wbdv-widget-preview">
            <p className='wbdv-paragraph-preview'>
              {this.state.text}
            </p>
          </div>
        </div>
    )
  }
};

const mapStateToProps = (state) => ({
  widget_preview: state.widget_preview,
});

export default connect(mapStateToProps, null)(ParagraphWidgetComponent);