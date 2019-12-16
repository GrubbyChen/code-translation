# deepGet

Returns the target value in a nested JSON object, based on the `keys` array.

Compare the keys you want in the nested JSON object as an `Array`.
Use `Array.prototype.reduce()` to get value from nested JSON object one by one. 
If the key exists in object, return target value, otherwise, return `null`.

## Translate

根据`keys`数组返回嵌套JSON对象中的目标值。

将您想要的嵌套JSON对象中的键作为“数组”进行比较。
使用Array.prototype.reduce（）来从嵌套的JSON对象中一对一地获取值。
如果键存在于对象中，则返回目标值，否则返回“ null”。

## Code

```js
const deepGet = (obj, keys) => keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), obj);
```

## Example

```js
let index = 2;
const data = {
  foo: {
    foz: [1, 2, 3],
    bar: {
      baz: ['a', 'b', 'c']
    }
  }
};
deepGet(data, ['foo', 'foz', index]); // get 3
deepGet(data, ['foo', 'bar', 'baz', 8, 'foz']); // null
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
