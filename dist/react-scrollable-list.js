'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = _react2['default'].createClass({
  displayName: 'index',

  getDefaultProps: function getDefaultProps() {
    return {
      listItems: [],
      heightOfItem: 30,
      maxItemsToRender: 50
    };
  },
  getInitialState: function getInitialState() {
    return {
      scrollPosition: 0
    };
  },
  componentDidMount: function componentDidMount() {
    _react2['default'].findDOMNode(this.refs.list).addEventListener('scroll', this.updateScrollPosition);
  },
  componentWillUnmount: function componentWillUnmount() {
    _react2['default'].findDOMNode(this.refs.list).removeEventListener('scroll', this.updateScrollPosition);
  },
  updateScrollPosition: function updateScrollPosition() {
    var newScrollPosition = _react2['default'].findDOMNode(this.refs.list).scrollTop / this.props.heightOfItem;
    var difference = Math.abs(this.state.scrollPosition - newScrollPosition);

    if (difference >= this.props.maxItemsToRender / 5) this.setState({ scrollPosition: newScrollPosition });
  },
  render: function render() {
    var startPosition = this.state.scrollPosition - this.props.maxItemsToRender > 0 ? this.state.scrollPosition - this.props.maxItemsToRender : 0;
    var endPosition = this.state.scrollPosition + this.props.maxItemsToRender >= this.props.listItems.length ? this.props.listItems.length : this.state.scrollPosition + this.props.maxItemsToRender;

    return _react2['default'].createElement(
      'div',
      { className: 'react-scrollable-list', ref: 'list' },
      _react2['default'].createElement('div', { key: 'list-spacer-top', style: { height: startPosition * this.props.heightOfItem } }),
      this.props.listItems.slice(startPosition, endPosition).map(function (item) {
        return _react2['default'].createElement(
          'div',
          { className: 'react-scrollable-list-item', key: 'list-item-' + item.id },
          item.content
        );
      }),
      _react2['default'].createElement('div', { key: 'list-spacer-bottom', style: {
          height: this.props.listItems.length * this.props.heightOfItem - endPosition * this.props.heightOfItem
        } })
    );
  }
});
module.exports = exports['default'];