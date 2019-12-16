# capitalize

Capitalizes the first letter of a string.

Use array destructuring and `String.prototype.toUpperCase()` to capitalize first letter, `...rest` to get array of characters after first letter and then `Array.prototype.join('')` to make it a string again.
Omit the `lowerRest` parameter to keep the rest of the string intact, or set it to `true` to convert to lowercase.

## Translate

大写字符串的第一个字母。

使用数组解构和`String.prototype.toUpperCase（）`大写首字母，`... rest`获得首个字母后的字符数组，然后使用'Array.prototype.join（''）`使其成为字符串再次。
省略`lowerRest`参数以保持字符串的其余部分不变，或将其设置为`true`以转换为小写字母。

## Code

```js
const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
```

## Example

```js
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
