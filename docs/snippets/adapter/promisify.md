# promisify

Converts an asynchronous function to return a promise.

*In Node 8+, you can use [`util.promisify`](https://nodejs.org/api/util.html#util_util_promisify_original)*

Use currying to return a function returning a `Promise` that calls the original function.
Use the `...rest` operator to pass in all the parameters.

## Translate

转换异步函数以返回promise。

*在Node 8+中，您可以使用[`util.promisify`]（https://nodejs.org/api/util.html#util_util_promisify_original）*

使用currying返回一个函数，该函数返回一个调用原始函数的Promise。
使用`... rest`运算符来传递所有参数。

## Code

```js
const promisify = func => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );
```

## Example

```js
const delay = promisify((d, cb) => setTimeout(cb, d));
delay(2000).then(() => console.log('Hi!')); // // Promise resolves after 2s
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
