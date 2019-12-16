# none

Returns `true` if the provided predicate function returns `false` for all elements in a collection, `false` otherwise.

Use `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.
Omit the second argument, `fn`, to use `Boolean` as a default.

## Translate

如果提供的谓词函数对集合中的所有元素都返回“ false”，则返回“ true”，否则返回“ false”。

使用Array.prototype.some（）来测试集合中是否有任何元素基于fn返回true。
省略第二个参数`fn`，以使用`Boolean'作为默认值。

## Code

```js
const none = (arr, fn = Boolean) => !arr.some(fn);
```

## Example

```js
none([0, 1, 3, 0], x => x == 2); // true
none([0, 0, 0]); // true
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
