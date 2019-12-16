# invertKeyValues

Inverts the key-value pairs of an object, without mutating it. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. If a function is supplied, it is applied to each inverted key.

Use `Object.keys()` and `Array.prototype.reduce()` to invert the key-value pairs of an object and apply the function provided (if any).
Omit the second argument, `fn`, to get the inverted keys without applying a function to them.

## Translate

反转对象的键/值对，而不对其进行突变。每个反转键的相应反转值是负责生成反转值的键的数组。如果提供了功能，则该功能将应用于每个反向键。

使用Object.keys（）和Array.prototype.reduce（）反转对象的键值对并应用提供的功能（如果有）。
省略第二个参数`fn`，以获取反向键而不对它们应用函数。

## Code

```js
const invertKeyValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, key) => {
    const val = fn ? fn(obj[key]) : obj[key];
    acc[val] = acc[val] || [];
    acc[val].push(key);
    return acc;
  }, {});
```

## Example

```js
invertKeyValues({ a: 1, b: 2, c: 1 }); // { 1: [ 'a', 'c' ], 2: [ 'b' ] }
invertKeyValues({ a: 1, b: 2, c: 1 }, value => 'group' + value); // { group1: [ 'a', 'c' ], group2: [ 'b' ] }
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
