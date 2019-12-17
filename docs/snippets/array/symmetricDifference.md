# symmetricDifference

Returns the symmetric difference between two arrays, without filtering out duplicate values.

Create a `Set` from each array, then use `Array.prototype.filter()` on each of them to only keep values not contained in the other.

## 翻译

返回两个数组之间的对称差，而不过滤掉重复的值。

从每个数组创建一个Set，然后在每个数组上使用Array.prototype.filter（）以仅保留彼此不包含的值。

## 代码

```js
const symmetricDifference = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};
```

## 例子

```js
symmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]
symmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 2, 3]
```
