'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollableList = function (_Component) {
  _inherits(ScrollableList, _Component);

  function ScrollableList(props) {
    _classCallCheck(this, ScrollableList);

    var _this = _possibleConstructorReturn(this, (ScrollableList.__proto__ || Object.getPrototypeOf(ScrollableList)).call(this, props));

    _this.state = { scrollPosition: 0 };

    _this.updateScrollPosition = _this.updateScrollPosition.bind(_this);
    return _this;
  }

  _createClass(ScrollableList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.refs.list.addEventListener('scroll', this.updateScrollPosition);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.refs.list.removeEventListener('scroll', this.updateScrollPosition);
    }
  }, {
    key: 'updateScrollPosition',
    value: function updateScrollPosition() {
      var newScrollPosition = this.refs.list.scrollTop / this.props.heightOfItem;
      var difference = Math.abs(this.state.scrollPosition - newScrollPosition);

      if (difference >= this.props.maxItemsToRender / 5) {
        this.setState({ scrollPosition: newScrollPosition });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var startPosition = this.state.scrollPosition - this.props.maxItemsToRender > 0 ? this.state.scrollPosition - this.props.maxItemsToRender : 0;

      var endPosition = this.state.scrollPosition + this.props.maxItemsToRender >= this.props.listItems.length ? this.props.listItems.length : this.state.scrollPosition + this.props.maxItemsToRender;

      return _react2.default.createElement(
        'div',
        { className: 'react-scrollable-list', ref: 'list', style: this.props.style },
        _react2.default.createElement('div', {
          key: 'list-spacer-top',
          style: {
            height: startPosition * this.props.heightOfItem
          }
        }),
        this.props.listItems.slice(startPosition, endPosition).map(function (item) {
          return _react2.default.createElement(
            'div',
            {
              className: 'react-scrollable-list-item',
              key: 'list-item-' + item.id },
            item.content
          );
        }),
        _react2.default.createElement('div', {
          key: 'list-spacer-bottom',
          style: {
            height: this.props.listItems.length * this.props.heightOfItem - endPosition * this.props.heightOfItem
          }
        })
      );
    }
  }]);

  return ScrollableList;
}(_react.Component);

ScrollableList.propTypes = {
  listItems: _propTypes2.default.array.isRequired,
  heightOfItem: _propTypes2.default.number,
  maxItemsToRender: _propTypes2.default.number,
  style: _propTypes2.default.object
};
ScrollableList.defaultProps = {
  listItems: [],
  heightOfItem: 30,
  maxItemsToRender: 50
};
exports.default = ScrollableList;