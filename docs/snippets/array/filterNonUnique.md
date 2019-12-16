# filterNonUnique

Filters out the non-unique values in an array.

Use `Array.prototype.filter()` for an array containing only the unique values.

## Translate

筛选出数组中的非唯一值。

对仅包含唯一值的数组使用“ Array.prototype.filter（）”。

## Code

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
```

## Example

```js
filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
