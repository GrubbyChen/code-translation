# toDecimalMark

Use `toLocaleString()` to convert a float-point arithmetic to the [Decimal mark](https://en.wikipedia.org/wiki/Decimal_mark) form. It makes a comma separated string from a number.

## Translate

使用`toLocaleString（）`将浮点运算转换为[Decimal mark]（https://en.wikipedia.org/wiki/Decimal_mark）形式。它使数字与逗号分隔的字符串。

## Code

```js
const toDecimalMark = num => num.toLocaleString('en-US');
```

## Example

```js
toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
