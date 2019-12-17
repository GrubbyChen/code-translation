# symmetricDifferenceBy

将提供的函数应用于两个数组的每个数组元素后，返回两个数组之间的对称差。

通过对每个数组的元素应用fn来创建Set，然后对每个元素使用Array.prototype.filter（），以仅保留彼此不包含的值。

## 代码

```js
const symmetricDifferenceBy = (a, b, fn) => {
  const sA = new Set(a.map(v => fn(v))),
    sB = new Set(b.map(v => fn(v)));
  return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];
};
```

## 例子

```js
symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [ 1.2, 3.4 ]
```
