# omitBy

创建一个对象，该对象由给定函数返回 false 的数据组成，该函数传入两个参数调用：(值，键)。

- 使用 `Object.keys(obj)` 和 `Array.prototype.filter()` 删除 `fn` 返回真实值的键。
- 使用 `Array.prototype.reduce()` 将过滤后的键转换回具有相应键值对的对象。

## 代码

```js
const omitBy = (obj, fn) =>
  Object.keys(obj)
    .filter(k => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
```

## 例子

```js
omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { b: '2' }
```
