# debounce

创建一个防抖函数，将延迟调用传入的函数，每次调用都需要至少经过一定的时间间隔。

- 每次调用防抖函数时，使用 `clearTimeout()` 清除当前的计时器，并使用 `setTimeout()` 创建新的计时器，该计时器将延迟调用传入的函数。
- 第二个参数 `ms` 默认值为 `0 ms`。

## 代码

```js
const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
```

## 例子

```js
window.addEventListener(
  'resize',
  debounce(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
); // Will log the window dimensions at most every 250ms
```
