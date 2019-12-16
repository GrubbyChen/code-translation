# getType

Returns the native type of a value.

Returns lowercased constructor name of value, `"undefined"` or `"null"` if value is `undefined` or `null`.

## Translate

返回值的本机类型。

返回值的小写构造函数名称，如果值是`undefined`或`null`，则返回“ undefined”或“ null”。

## Code

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
```

## Example

```js
getType(new Set([1, 2, 3])); // 'set'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>