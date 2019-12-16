# timeTaken

Measures the time taken by a function to execute.

Use `console.time()` and `console.timeEnd()` to measure the difference between the start and end times to determine how long the callback took to execute.

## Translate

测量函数执行所需的时间。

使用`console.time（）`和`console.timeEnd（）`来测量开始时间和结束时间之间的差，以确定回调执行的时间。

## Code

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};
```

## Example

```js
timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
