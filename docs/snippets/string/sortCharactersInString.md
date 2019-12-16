# sortCharactersInString

Alphabetically sorts the characters in a string.

Use the spread operator (`...`), `Array.prototype.sort()` and  `String.localeCompare()` to sort the characters in `str`, recombine using `String.prototype.join('')`.

## Translate

按字母顺序对字符串中的字符进行排序。

使用扩展运算符（...），Array.prototype.sort（）和String.localeCompare（）对str中的字符进行排序，并使用String.prototype.join（）进行重组。 `。

## Code

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');
```

## Example

```js
sortCharactersInString('cabbage'); // 'aabbceg'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
