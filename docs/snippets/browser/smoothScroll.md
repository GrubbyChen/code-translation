# smoothScroll

将调用该元素的元素平滑滚动到浏览器窗口的可见区域。

- 使用.scrollIntoView方法滚动元素。
- 将 `{ behavior：'smooth' }` 传递给 `.scrollIntoView`，以便其平滑滚动。

## 代码

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
```

## 例子

```js
smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
