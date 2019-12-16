# compact

Removes falsy values from an array.

Use `Array.prototype.filter()` to filter out falsy values (`false`, `null`, `0`, `""`, `undefined`, and `NaN`).

## Translate

从数组中删除伪造的值。

使用Array.prototype.filter（）过滤掉虚假的值（假，空，0，“”，“ undefined”和“ NaN”）。

## Code

```js
const compact = arr => arr.filter(Boolean);
```

## Example

```js
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
