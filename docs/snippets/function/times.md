# times

Iterates over a callback `n` times

Use `Function.call()` to call `fn` `n` times or until it returns `false`.
Omit the last argument, `context`, to use an `undefined` object (or the global object in non-strict mode).

## Translate

遍历回调`n`次

使用Function.call（）来调用fn次或直到返回false为止。
省略最后一个参数“ context”，以使用“ undefined”对象（或非严格模式下的全局对象）。

## Code

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};
```

## Example

```js
var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
