# forOwnRight

反向遍历对象的所有自身属性，为每个对象运行一个回调。

使用Object.keys（obj）获取对象的所有属性，使用Array.prototype.reverse（）颠倒其顺序，使用Array.prototype.forEach（）为每个键运行提供的功能，价值对。回调接收三个参数-值，键和对象。

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
