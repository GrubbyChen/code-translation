# takeWhile

Removes elements in an array until the passed function returns `true`. Returns the removed elements.

Loop through the array, using a `for...of` loop over `Array.prototype.entries()` until the returned value from the function is `true`.
Return the removed elements, using `Array.prototype.slice()`.

## Translate

删除数组中的元素，直到传递的函数返回“ true”为止。返回移除的元素。

通过在Array.prototype.entries（）上使用for循环来遍历数组，直到函数返回的值为true为止。
使用Array.prototype.slice（）返回删除的元素。

## Code

```js
const takeWhile = (arr, func) => {
  for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);
  return arr;
};
```

## Example

```js
takeWhile([1, 2, 3, 4], n => n >= 3); // [1, 2]
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
