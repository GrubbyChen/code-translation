# smoothScroll

Smoothly scrolls the element on which it's called into the visible area of the browser window.

Use `.scrollIntoView` method to scroll the element. 
Pass `{ behavior: 'smooth' }` to `.scrollIntoView` so it scrolls smoothly.

## Translate

将调用该元素的元素平滑滚动到浏览器窗口的可见区域。

使用.scrollIntoView方法滚动元素。
将`{behavior：'smooth'}`传递给`.scrollIntoView`，以便其平滑滚动。

## Code

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
```

## Example

```js
smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
