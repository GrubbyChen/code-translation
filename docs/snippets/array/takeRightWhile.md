# takeRightWhile

Removes elements from the end of an array until the passed function returns `true`. Returns the removed elements.

Loop through the array, using a `Array.prototype.reduceRight()` and accumulating elements while the function returns falsy value.

## Translate

从数组末尾删除元素，直到传递的函数返回“ true”为止。返回移除的元素。

使用一个Array.prototype.reduceRight（）遍历数组，并在函数返回假值时累加元素。

## Code

```js
const takeRightWhile = (arr, func) =>
  arr.reduceRight((acc, el) => (func(el) ? acc : [el, ...acc]), []);
```

## Example

```js
takeRightWhile([1, 2, 3, 4], n => n < 3); // [3, 4]
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
