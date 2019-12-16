# isEmpty

Returns true if the a value is an empty object, collection, has no enumerable properties or is any type that is not considered a collection.

Check if the provided value is `null` or if its `length` is equal to `0`.

## Translate

如果a值是一个空对象，集合，没有可枚举的属性或任何不视为集合的类型，则返回true。

检查提供的值是否为“ null”或其“ length”是否等于“ 0”。

## Code

```js
const isEmpty = val => val == null || !(Object.keys(val) || val).length;
```

## Example

```js
isEmpty([]); // true
isEmpty({}); // true
isEmpty(''); // true
isEmpty([1, 2]); // false
isEmpty({ a: 1, b: 2 }); // false
isEmpty('text'); // false
isEmpty(123); // true - type is not considered a collection
isEmpty(true); // true - type is not considered a collection
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
