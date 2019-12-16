# decapitalize

Decapitalizes the first letter of a string.

Use array destructuring and `String.toLowerCase()` to decapitalize first letter, `...rest` to get array of characters after first letter and then `Array.prototype.join('')` to make it a string again.
Omit the `upperRest` parameter to keep the rest of the string intact, or set it to `true` to convert to uppercase.

## Translate

将字符串的首字母大写。

使用数组解构和“ String.toLowerCase（）”将首字母大写，“ ... rest”获取首字母后的字符数组，然后使用“ Array.prototype.join（''）`再次使其成为字符串。
省略参数upperRest以保持字符串的其余部分不变，或将其设置为true转换为大写。

## Code

```js
const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));
```

## Example

```js
decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar', true); // 'fOOBAR'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
