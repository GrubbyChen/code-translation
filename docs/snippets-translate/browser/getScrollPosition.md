# getScrollPosition

返回当前页面的滚动位置。

如果定义了`pageXOffset`和`pageYOffset`，否则使用`scrollLeft`和`scrollTop`。
您可以省略“ el”以使用默认值“ window”。

## 代码

```js
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});
```

## 例子

```js
getScrollPosition(); // {x: 0, y: 200}
```
