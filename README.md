# React Scrollable List

React Scrollable List is a scrollable, high-performance list component for
rendering large lists of items with React. It's performance really shines when
dealing with lists in excess of a thousand items, and scales well into the
millions or more. Due to it only rendering a small slice of the list into the
DOM at any time based on the scroll position, it removes most of the speed
issues with web browsers and rendering very large amounts of DOM nodes at once.

## Demo

[jwarning.github.io/react-scrollable-list](http://jwarning.github.io/react-scrollable-list)

The component is generic and renders a simple component comprised of a div
wrapper and div containers for each of the elements currently rendered.

To style the elements you can simply refer to the `.react-scrollable-list` and
the `.react-scrollable-list-item` classes. The list items need to be passed in
via props in the following format:

```
{
  id: 'a unique identifier',
  content: 'the content to display inside the div'
}
```

The content can alternatively also be another react component.

The component takes up to three props:
- listItems: an array of items in the format specified above
- heightOfItem: the CSS height of each item (needs to be the same for each item)
- maxItemsToRender: an optional number which tells the component how many
components before and after the item scrolled to it should pre-render

```
<ReactScrollableList
  listItems=[...]
  heightOfItem={30}
  maxItemsToRender={50}
/>
```

## Notes

To build a CommonJS version of this file simply run `npm run build`.
A build is already included in the dist folder.

## License

[MIT](./LICENSE)
