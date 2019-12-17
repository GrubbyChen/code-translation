# powerset

返回给定数字数组的幂集。

结合使用Array.prototype.reduce（）和Array.prototype.map（）来遍历元素并合并成包含所有组合的数组。

## 代码

```js
const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
```

## 例子

```js
powerset([1, 2]); // [[], [1], [2], [2, 1]]
```
