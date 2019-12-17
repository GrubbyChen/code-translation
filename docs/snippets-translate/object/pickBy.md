# pickBy

创建一个由给定函数返回true的属性组成的对象。该函数使用两个参数调用：（值，键）。

使用Object.keys（obj）和Array.prototype.filter（）删除fn返回伪造值的键。
使用Array.prototype.reduce（）将过滤后的键转换回具有相应键值对的对象。

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
