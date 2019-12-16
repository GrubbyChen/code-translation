# debounce

Creates a debounced function that delays invoking the provided function until at least `ms` milliseconds have elapsed since the last time it was invoked.

Each time the debounced function is invoked, clear the current pending timeout with `clearTimeout()` and use `setTimeout()` to create a new timeout that delays invoking the function until at least `ms` milliseconds has elapsed. Use `Function.prototype.apply()` to apply the `this` context to the function and provide the necessary arguments.
Omit the second argument, `ms`, to set the timeout at a default of 0 ms.

## Translate

创建一个防反跳函数，该函数将延迟调用提供的函数，直到自上次调用该函数起至少经过了ms毫秒。

每次调用去抖动功能时，请使用clearTimeout（）清除当前的挂起超时，并使用setTimeout（）创建新的超时，该超时将延迟调用该函数，直到至少经过ms毫秒。使用Function.prototype.apply（）将this上下文应用于函数并提供必要的参数。
省略第二个参数“ ms”，以将超时设置为默认值0 ms。

## Code

```js
const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
```

## Example

```js
window.addEventListener(
  'resize',
  debounce(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
); // Will log the window dimensions at most every 250ms
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
