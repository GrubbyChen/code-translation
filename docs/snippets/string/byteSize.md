# byteSize

Returns the length of a string in bytes.

Convert a given string to a [`Blob` Object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) and find its `size`.

## Translate

返回字符串的长度（以字节为单位）。

将给定的字符串转换为[`Blob`对象]（https://developer.mozilla.org/en-US/docs/Web/API/Blob）并找到其大小。

## Code

```js
const byteSize = str => new Blob([str]).size;
```

## Example

```js
byteSize('😀'); // 4
byteSize('Hello World'); // 11
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
