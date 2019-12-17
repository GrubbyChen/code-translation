# isPlainObject

检查提供的值是否是由Object构造函数创建的对象。

检查提供的值是否真实，使用`typeof`检查它是否是一个对象，并使用'Object.constructor'确保构造函数等于'Object'。

## 代码

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;
```

## 例子

```js
isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
