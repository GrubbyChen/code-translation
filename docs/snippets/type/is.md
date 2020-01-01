# is

检查提供的参数是否为指定的数据类型。

- 使用 `Array.prototype.includes()` 确保该参数不是 `undefined` 或 `null`
- 然后将该参数的 `constructor` 属性与 `type` 进行比较。

## 代码

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;
```

## 例子

```js
is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```
