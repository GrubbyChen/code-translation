# equals

在两个值之间进行深度比较以确定它们是否等效。

使用`Date.getTime（）`检查两个值是否相同，是否都是相同的'Date'对象，或者是否都是相等的非对象值（严格比较）。
检查是否只有一个值为“ null”或“ undefined”，或者它们的原型是否不同。
如果以上条件都不满足，则使用Object.keys（）检查两个值是否具有相同数量的键，然后使用Array.prototype.every（）检查第一个值中的每个键是否存在在第二种方法中，如果它们等效，则通过递归调用此方法。

## 代码

```js
const equals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
  if (a.prototype !== b.prototype) return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => equals(a[k], b[k]));
};
```

## 例子

```js
equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
```
