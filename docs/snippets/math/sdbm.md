# sdbm

Hashes the input string into a whole number.

Use `String.prototype.split('')` and `Array.prototype.reduce()` to create a hash of the input string, utilizing bit shifting.

## Translate

将输入字符串哈希为整数。

使用String.prototype.split（''）和Array.prototype.reduce（）使用位移来创建输入字符串的哈希。

## Code

```js
const sdbm = str => {
  let arr = str.split('');
  return arr.reduce(
    (hashCode, currentVal) =>
      (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
    0
  );
};
```

## Example

```js
sdbm('name'); // -3521204949
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
