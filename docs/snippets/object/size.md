# size

Get size of arrays, objects or strings.

Get type of `val` (`array`, `object` or `string`). 
Use `length` property for arrays.
Use `length` or `size` value if available or number of keys for objects.
Use `size` of a [`Blob` object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) created from `val` for strings.
Split strings into array of characters with `split('')` and return its length.

## Translate

获取数组，对象或字符串的大小。

获取val类型（数组，对象或字符串）。
对数组使用`length`属性。
如果可用，则使用“长度”或“大小”值，或者使用对象的键数。
使用从`val`创建的[`Blob`对象]（https://developer.mozilla.org/zh-CN/docs/Web/API/Blob）的`size`作为字符串。
用`split（''）`将字符串分割成字符数组，并返回其长度。

## Code

```js
const size = val =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === 'object'
    ? val.size || val.length || Object.keys(val).length
    : typeof val === 'string'
    ? new Blob([val]).size
    : 0;
```

## Example

```js
size([1, 2, 3, 4, 5]); // 5
size('size'); // 4
size({ one: 1, two: 2, three: 3 }); // 3
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
