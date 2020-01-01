# sdbm

将输入字符串哈希为整数。

- 使用 `String.prototype.split('')` 和 `Array.prototype.reduce()` 以及位移运算符 `<<` 来创建输入字符串的哈希值。

## 代码

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

## 例子

```js
sdbm('name'); // -3521204949
```
