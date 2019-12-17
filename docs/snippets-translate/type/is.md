# is

检查提供的值是否为指定的类型。

使用Array.prototype.includes（）确保该值不是undefined或null，然后将该值的constructor属性与type进行比较，以检查提供的值是否为指定的type类型。 。

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