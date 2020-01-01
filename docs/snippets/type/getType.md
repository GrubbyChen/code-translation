# getType

返回参数的数据类型。

- 如果参数是 `undefined` 或 `null`，则直接返回，
- 否则返回参数的 `constructor.name` 属性。

## 代码

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
```

## 例子

```js
getType(new Set([1, 2, 3])); // 'set'
```
