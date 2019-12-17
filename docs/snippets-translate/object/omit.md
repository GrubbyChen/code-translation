# omit

从对象中省略与给定键对应的键值对。

使用Object.keys（obj），Array.prototype.filter（）和Array.prototype.includes（）删除提供的键。
使用Array.prototype.reduce（）将过滤后的键转换回具有相应键值对的对象。

## 代码

```js
const omit = (obj, arr) =>
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
```

## 例子

```js
omit({ a: 1, b: '2', c: 3 }, ['b']); // { 'a': 1, 'c': 3 }
```