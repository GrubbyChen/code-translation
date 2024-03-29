# elementIsVisibleInViewport

如果指定的元素在视口中可见，则返回 `true`，否则返回 `false`。

- 使用 `Element.getBoundingClientRect()` 和 `window.inner(Width | Height)` 值，确定给定元素在视口中是否可见。
- 第二个参数确定元素是否完全可见，默认值为 `false`。

## 代码

```js
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
```

## 例子

```js
// e.g. 100x100 viewport and a 10x10px element at position {top: -1, left: 0, bottom: 9, right: 10}
elementIsVisibleInViewport(el); // false - (not fully visible)
elementIsVisibleInViewport(el, true); // true - (partially visible)
```
