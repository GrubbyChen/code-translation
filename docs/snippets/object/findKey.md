# findKey

Returns the first key that satisfies the provided testing function. Otherwise `undefined` is returned.

Use `Object.keys(obj)` to get all the properties of the object, `Array.prototype.find()` to test the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.

## 翻译

返回满足提供的测试功能的第一个键。否则返回“未定义”。

使用Object.keys（obj）获取对象的所有属性，使用Array.prototype.find（）测试每个键值对提供的函数。回调接收三个参数-值，键和对象。

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
