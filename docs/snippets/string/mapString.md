# mapString

Creates a new string with the results of calling a provided function on every character in the calling string.

Use `String.prototype.split('')` and `Array.prototype.map()` to call the provided function, `fn`, for each character in `str`.
Use `Array.prototype.join('')` to recombine the array of characters into a string.
The callback function, `fn`, takes three arguments (the current character, the index of the current character and the string `mapString` was called upon).

## Translate

创建一个新字符串，并在调用字符串中的每个字符上调用提供的函数。

使用String.prototype.split（''）和Array.prototype.map（）为str中的每个字符调用提供的函数fn。
使用Array.prototype.join（''）将字符数组重新组合为字符串。
回调函数fn具有三个参数（当前字符，当前字符的索引以及调用了字符串mapString）。

## Code

```js
const mapString = (str, fn) =>
  str
    .split('')
    .map((c, i) => fn(c, i, str))
    .join('');
```

## Example

```js
mapString('lorem ipsum', c => c.toUpperCase()); // 'LOREM IPSUM'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
