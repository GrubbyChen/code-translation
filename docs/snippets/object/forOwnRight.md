# forOwnRight

Iterates over all own properties of an object in reverse, running a callback for each one.

Use `Object.keys(obj)` to get all the properties of the object, `Array.prototype.reverse()` to reverse their order and `Array.prototype.forEach()` to run the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.

## 翻译

反向遍历对象的所有自身属性，为每个对象运行一个回调。

- 使用 `Object.keys(obj)` 获取对象的所有属性，使用 `Array.prototype.reverse()` 颠倒其顺序，使用 `Array.prototype.forEach()` 为每个键值对运行传入的函数。
- 回调接收三个参数：值、键和对象。

## 代码

```js
const forOwnRight = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .forEach(key => fn(obj[key], key, obj));
```

## 例子

```js
forOwnRight({ foo: 'bar', a: 1 }, v => console.log(v)); // 1, 'bar'
```
