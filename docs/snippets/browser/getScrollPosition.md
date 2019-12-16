# getScrollPosition

Returns the scroll position of the current page.

Use `pageXOffset` and `pageYOffset` if they are defined, otherwise `scrollLeft` and `scrollTop`.
You can omit `el` to use a default value of `window`.

## Translate

返回当前页面的滚动位置。

如果定义了`pageXOffset`和`pageYOffset`，否则使用`scrollLeft`和`scrollTop`。
您可以省略“ el”以使用默认值“ window”。

## Code

```js
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});
```

## Example

```js
getScrollPosition(); // {x: 0, y: 200}
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
