# nodeListToArray

Converts a `NodeList` to an array.

Use spread operator inside new array to convert a `NodeList` to an array.

## Translate

将NodeList转换为数组。

在新数组中使用传播运算符将NodeList转换为数组。

## Code

```js
const nodeListToArray = nodeList => [...nodeList];
```

## Example

```js
nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
