# isObject

返回一个布尔值，确定传递的值是否是一个对象。

使用Object构造函数为给定值创建对象包装。
如果值为“ null”或“ undefined”，则创建并返回一个空对象。另外，返回与给定值对应的类型的对象。

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
