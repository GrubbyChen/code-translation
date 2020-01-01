# isNil

如果指定值为 `null` 或 `undefined`，则返回 `true`，否则返回 `false`。

## 代码

```js
const isNil = val => val === undefined || val === null;
```

## 例子

```js
isNil(null); // true
isNil(undefined); // true
```
