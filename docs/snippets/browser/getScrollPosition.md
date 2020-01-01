# getScrollPosition

返回当前页面的滚动位置。

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
