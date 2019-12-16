# sampleSize

Gets `n` random elements at unique keys from `array` up to the size of `array`.

Shuffle the array using the [Fisher-Yates algorithm](https://github.com/30-seconds/30-seconds-of-code#shuffle).
Use `Array.prototype.slice()` to get the first `n` elements.
Omit the second argument, `n` to get only one element at random from the array.

## Translate

从“数组”获取唯一键处的“ n”个随机元素，直至“数组”的大小。

使用[Fisher-Yates算法]（https://github.com/30-seconds/30-seconds-of-code#shuffle）对数组进行混洗。
使用Array.prototype.slice（）获取第一个n元素。
省略第二个参数“ n”以从数组中随机获取一个元素。

## Code

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};
```

## Example

```js
sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
