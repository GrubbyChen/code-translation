# objectFromPairs

根据给定的键值对创建一个对象。

- 使用 Array.prototype.reduce() 创建和组合键值对。

## 代码

```js
const objectFromPairs = arr => arr.reduce((a, [key, val]) => ((a[key] = val), a), {});
```

## 例子

```js
objectFromPairs([['a', 1], ['b', 2]]); // {a: 1, b: 2}
```
