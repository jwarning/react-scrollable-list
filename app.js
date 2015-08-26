var React = require('react');
var ReactScrollableList = require('./dist/react-scrollable-list.js');

var listItems = [];
for (var i = 0; i < 10000; i++) {
  listItems.push({ id: i, content: i });
}

React.render(React.createElement(ReactScrollableList, {
  listItems: listItems,
  heightOfItem: 30,
  maxItemsToRender: 20
}), document.getElementById('app'));
