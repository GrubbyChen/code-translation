# scrollToTop

平滑滚动到页面顶部。

- 使用 `document.documentElement.scrollTop` 或 `document.body.scrollTop` 获取与页面顶部的距离。
- 每次滚动一小段直到达到页面顶部，使用 `window.requestAnimationFrame()` 来优化滚动动画。

## 代码

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
```

## 例子

```js
scrollToTop();
```
