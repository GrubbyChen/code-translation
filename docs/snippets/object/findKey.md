# findKey

返回满足提供的函数的第一个键，都不满足则返回 `undefined`。

- 使用 `Object.keys(obj)` 获取对象的所有属性，使用 `Array.prototype.find()` 测试每个键值对提供的函数。
- 回调函数接收三个参数：值，键和对象。

## 代码

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));
```

## 例子

```js
findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```
