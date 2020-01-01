# isPlainObject

检查传入的参数是否是由 `Object` 构造函数创建的对象。

## 代码

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;
```

## 例子

```js
isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
