# mapKeys

创建一个对象，该对象的键根据传入的函数重新生成。

- 使用 `Object.keys(obj)` 遍历对象的键。
- 使用 `Array.prototype.reduce()` 使用 `fn` 创建一个具有相同值和映射键的新对象。

## 代码

```js
const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {});
```

## 例子

```js
mapKeys({ a: 1, b: 2 }, (val, key) => key + val); // { a1: 1, b2: 2 }
```
