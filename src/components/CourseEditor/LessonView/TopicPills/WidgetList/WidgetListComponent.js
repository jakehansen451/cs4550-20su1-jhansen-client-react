import React from 'react';
import {connect} from 'react-redux';
import '../../../../../styles.css';
import './WidgetListComponent.css';
import HeadingWidgetComponent from "./Widgets/HeadingWidgetComponent";
import ParagraphWidgetComponent from "./Widgets/ParagraphWidgetComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {select_widget} from "../../../../../store/SelectedWidgetReducer";
import WidgetService from "../../../../../services/WidgetService";
import {delete_widget, set_widgets} from "../../../../../store/WidgetReducer";

class WidgetListComponent extends React.Component {
  deleteWidget = (widget) => {
    WidgetService.deleteWidget(widget._id)
    .then(response => this.props.deleteWidget(widget._id));
  };

  reorderUp = (widget) => WidgetService.reorderUp(widget._id)
  .then(newWidgets => this.props.setWidgets(newWidgets));

  reorderDown = (widget) => WidgetService.reorderDown(widget._id)
  .then(newWidgets => this.props.setWidgets(newWidgets));

  createWidget = (widget, index) => {
    return (
        <div
            className="card"
            key={index}
        >
          <div
              className="card-header wbdv-widget-heading-bar"
              onClick={() => this.props.selectWidget(
                  this.props.selected_widget._id === widget._id ? {} : widget)}
          >
            {widget.name}
            <div>
              <div className="btn-group">
                {widget.widgetOrder !== 0 &&
                <button
                    className="btn btn-light"
                    onClick={() => this.reorderUp(widget)}
                >
                  <FontAwesomeIcon icon={faArrowUp}/>
                </button>
                }
                {widget.widgetOrder !== this.props.widgets.length - 1 &&
                <button
                    className="btn btn-light"
                    onClick={() => this.reorderDown(widget)}
                >
                  <FontAwesomeIcon icon={faArrowDown}/>
                </button>
                }
              </div>
              <button
                  className="wbdv-icon-link wbdv-btn wbdv-delete-btn"
                  onClick={() => this.deleteWidget(widget)}
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
          active={this.props.selected_widget._id === widget._id}
      />;

  createParagraphWidget = (widget) =>
      <ParagraphWidgetComponent
          widget={widget}
          active={this.props.selected_widget._id === widget._id}
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
  deleteWidget: (widget) => dispatch(delete_widget(widget)),
  setWidgets: (widgets) => dispatch(set_widgets(widgets)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    WidgetListComponent);
