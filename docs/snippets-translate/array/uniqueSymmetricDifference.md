# uniqueSymmetricDifference

返回两个数组之间的唯一对称差异，不包含两个数组中的重复值。

在每个数组上使用Array.prototype.filter（）和Array.prototype.includes（）删除另一个数组中包含的值，然后从结果中创建Set，删除重复值。

## 代码

```js
const uniqueSymmetricDifference = (a, b) => [
  ...new Set([...a.filter(v => !b.includes(v)), ...b.filter(v => !a.includes(v))])
];
```

## 例子

```js
uniqueSymmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]
uniqueSymmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 3]
```
