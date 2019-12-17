# objectToPairs

Creates an array of key-value pair arrays from an object.

Use `Object.keys()` and `Array.prototype.map()` to iterate over the object's keys and produce an array with key-value pairs.

## 翻译

从一个对象创建一个键-值对数组。

使用Object.keys（）和Array.prototype.map（）遍历对象的键并生成具有键值对的数组。

## 代码

```js
const objectToPairs = obj => Object.keys(obj).map(k => [k, obj[k]]);
```

## 例子

```js
objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
```
