# objectToPairs

从一个对象创建一个键值对数组。

- 使用 `Object.keys()` 和 `Array.prototype.map()` 遍历对象的键并生成具有键值对的数组。

## 代码

```js
const objectToPairs = obj => Object.keys(obj).map(k => [k, obj[k]]);
```

## 例子

```js
objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
```
