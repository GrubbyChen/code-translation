# byteSize

Returns the length of a string in bytes.

Convert a given string to a [`Blob` Object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) and find its `size`.

## 翻译

返回字符串的长度（以字节为单位）。

将给定的字符串转换为[`Blob`对象]（https://developer.mozilla.org/en-US/docs/Web/API/Blob）并找到其大小。

## 代码

```js
const byteSize = str => new Blob([str]).size;
```

## 例子

```js
byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
