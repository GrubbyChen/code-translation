# scrollToTop

Smooth-scrolls to the top of the page.

Get distance from top using `document.documentElement.scrollTop` or `document.body.scrollTop`.
Scroll by a fraction of the distance from the top. Use `window.requestAnimationFrame()` to animate the scrolling.

## Translate

平滑滚动到页面顶部。

使用`document.documentElement.scrollTop`或`document.body.scrollTop`获取与顶部的距离。
滚动到顶部的距离的一小部分。使用“ window.requestAnimationFrame（）”来动画化滚动。

## Code

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
```

## Example

```js
scrollToTop();
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
