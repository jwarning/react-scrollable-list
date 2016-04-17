import React from 'react';
import ReactDOM from 'react-dom';
import ReactScrollableList from '../dist/index';

let listItems = [];
for (let i = 0; i < 10000; i++) {
  listItems.push({ id: i, content: i });
}

ReactDOM.render(<ReactScrollableList
  listItems={listItems}
  heightOfItem={30}
  maxItemsToRender={20}
/>, document.getElementById('app'));
