# size

获取数组、对象或字符串的大小。

- 获取 val 类型（数组、对象或字符串）。
- 数组：使用 `length` 属性。
- 对象：使用 `length` 或 `size`，或者使用对象键的数量。
- 字符串：使用通过 `val` 创建的[`Blob`对象](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)的 `size` 作为字符串长度。

## 代码

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

## 例子

```js
size([1, 2, 3, 4, 5]); // 5
size('size'); // 4
size({ one: 1, two: 2, three: 3 }); // 3
```
