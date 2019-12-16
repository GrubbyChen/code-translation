# equals

Performs a deep comparison between two values to determine if they are equivalent.

Check if the two values are identical, if they are both `Date` objects with the same time, using `Date.getTime()` or if they are both non-object values with an equivalent value (strict comparison).
Check if only one value is `null` or `undefined` or if their prototypes differ.
If none of the above conditions are met, use `Object.keys()` to check if both values have the same number of keys, then use `Array.prototype.every()` to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.

## Translate

在两个值之间进行深度比较以确定它们是否等效。

使用`Date.getTime（）`检查两个值是否相同，是否都是相同的'Date'对象，或者是否都是相等的非对象值（严格比较）。
检查是否只有一个值为“ null”或“ undefined”，或者它们的原型是否不同。
如果以上条件都不满足，则使用Object.keys（）检查两个值是否具有相同数量的键，然后使用Array.prototype.every（）检查第一个值中的每个键是否存在在第二种方法中，如果它们等效，则通过递归调用此方法。

## Code

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

## Example

```js
equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
