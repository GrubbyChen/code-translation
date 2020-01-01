# isPromiseLike（*）

Returns `true` if an object looks like a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), `false` otherwise.

Check if the object is not `null`, its `typeof` matches either `object` or `function` and if it has a `.then` property, which is also a `function`.

## 翻译

如果对象看起来像[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)，则返回`true`，否则返回false。

检查对象是否不是“ null”，其“ typeof”是否匹配“ object”或“ function”，以及是否具有“ .then”属性，该属性也是“ function”。

## 代码

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
```

## 例子

```js
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```
