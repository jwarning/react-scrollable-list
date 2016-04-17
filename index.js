import React, { PropTypes } from 'react';

export default React.createClass({
  propTypes: {
    listItems: PropTypes.array.isRequired,
    heightOfItem: PropTypes.number,
    maxItemsToRender: PropTypes.number
  },
  getDefaultProps() {
    return {
      listItems: [],
      heightOfItem: 30,
      maxItemsToRender: 50
    };
  },
  getInitialState() {
    return {
      scrollPosition: 0
    };
  },
  componentDidMount() {
    this.refs.list.addEventListener('scroll', this.updateScrollPosition);
  },
  componentWillUnmount() {
    this.refs.list.removeEventListener('scroll', this.updateScrollPosition);
  },
  updateScrollPosition() {
    const newScrollPosition = this.refs.list.scrollTop / this.props.heightOfItem;
    const difference = Math.abs(this.state.scrollPosition - newScrollPosition);

    if (difference >= this.props.maxItemsToRender / 5) {
      this.setState({ scrollPosition: newScrollPosition });
    }
  },
  render() {
    const startPosition =
      this.state.scrollPosition - this.props.maxItemsToRender > 0
      ? this.state.scrollPosition - this.props.maxItemsToRender
      : 0;

    const endPosition =
      this.state.scrollPosition + this.props.maxItemsToRender >= this.props.listItems.length
      ? this.props.listItems.length
      : this.state.scrollPosition + this.props.maxItemsToRender;

    return <div className='react-scrollable-list' ref='list'>
      <div key='list-spacer-top' style={{
        height: startPosition * this.props.heightOfItem
      }}></div>
      {this.props.listItems.slice(startPosition, endPosition).map(item => <div
        className='react-scrollable-list-item' key={'list-item-' + item.id}>{item.content}</div>)
      }
      <div key='list-spacer-bottom' style={{
        height: this.props.listItems.length * this.props.heightOfItem -
          endPosition * this.props.heightOfItem
      }}></div>
    </div>;
  }
});
