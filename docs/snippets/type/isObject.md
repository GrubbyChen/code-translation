# isObject

检查传入的参数是否为 `Object` 类型。

## 代码

```js
const isObject = obj => obj === Object(obj);
```

## 例子

```js
isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
