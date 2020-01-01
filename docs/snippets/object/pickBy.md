# pickBy

创建一个由给定函数返回 `true` 的数据组成的对象，该函数传入两个参数调用：(值，键)。

- 使用 `Object.keys(obj)` 和 `Array.prototype.filter()` 删除 `fn` 返回值为 `true` 的键。
- 使用 `Array.prototype.reduce()` 将过滤后的键转换回具有相应键值对的对象。

## 代码

```js
const pickBy = (obj, fn) =>
  Object.keys(obj)
    .filter(k => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
```

## 例子

```js
pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { 'a': 1, 'c': 3 }
```
