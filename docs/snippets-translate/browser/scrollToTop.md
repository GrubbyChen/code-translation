# scrollToTop

平滑滚动到页面顶部。

使用`document.documentElement.scrollTop`或`document.body.scrollTop`获取与顶部的距离。
滚动到顶部的距离的一小部分。使用“ window.requestAnimationFrame（）”来动画化滚动。

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
