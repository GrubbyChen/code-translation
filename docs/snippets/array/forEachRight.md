# forEachRight

Executes a provided function once for each array element, starting from the array's last element.

Use `Array.prototype.slice(0)` to clone the given array, `Array.prototype.reverse()` to reverse it and `Array.prototype.forEach()` to iterate over the reversed array.

## Translate

从数组的最后一个元素开始，对每个数组元素执行一次提供的功能。

使用Array.prototype.slice（0）克隆给定的数组，使用Array.prototype.reverse（）反转它，并使用Array.prototype.forEach（）遍历反转的数组。

## Code

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
```

## Example

```js
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
