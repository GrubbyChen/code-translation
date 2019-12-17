# omitBy

Creates an object composed of the properties the given function returns falsy for. The function is invoked with two arguments: (value, key).

Use `Object.keys(obj)` and `Array.prototype.filter()`to remove the keys for which `fn` returns a truthy value.
Use `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.

## 翻译

创建一个对象，该对象由给定函数返回falsy的属性组成。该函数使用两个参数调用：（值，键）。

使用Object.keys（obj）和Array.prototype.filter（）删除fn返回真实值的键。
使用Array.prototype.reduce（）将过滤后的键转换回具有相应键值对的对象。

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
