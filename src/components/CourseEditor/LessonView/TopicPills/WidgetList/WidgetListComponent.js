import React from 'react';
import {connect} from 'react-redux';
import '../../../../../styles.css';
import './WidgetListComponent.css';
import HeadingWidgetComponent from "./Widgets/HeadingWidgetComponent";
import ParagraphWidgetComponent from "./Widgets/ParagraphWidgetComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {select_widget} from "../../../../../store/SelectedWidgetReducer";

class WidgetListComponent extends React.Component {
  componentDidUpdate() {
    console.log(this.props);
  }

  createWidget = (widget, index) => {
    return (
        <div
            className="card"
            key={index}
            onClick={() => this.props.selectWidget(
                this.props.selected_widget === widget ? {} : widget)}
        >
          <div
              className="card-header wbdv-widget-heading-bar"
              id={widget.name.concat('-heading')}
          >
            <button
                className="btn btn-link wbdv-clickable-label"
                type="button"
                data-toggle="collapse"
                data-target={'#'.concat(widget.name)}
                aria-expanded="true"
                aria-controls={widget.name}
            >
              {widget.name}
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
          {this.widgetType(widget)}
        </div>);
  };

  widgetType = (widget) => {
    if (widget.type === 'HEADING') {
      return this.createHeadingWidget(widget);
    } else if (widget.type === 'PARAGRAPH') {
      return this.createParagraphWidget(widget);
    }
  };

  createHeadingWidget = (widget) =>
      <HeadingWidgetComponent
          widget={widget}
          active={this.props.selected_widget.name === widget.name}
      />;

  createParagraphWidget = (widget) =>
      <ParagraphWidgetComponent
          widget={widget}
          active={this.props.selected_widget.name === widget.name}
      />;

  render() {
    return (
        <div className="accordion" id="widget-accordion">
          {this.props.widgets.map(this.createWidget)}
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selected_widget: state.selected_widget,
});

const mapDispatchToProps = (dispatch) => ({
  selectWidget: (widget) => dispatch(select_widget(widget)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    WidgetListComponent);
