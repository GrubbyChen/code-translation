# getStyle

Returns the value of a CSS rule for the specified element.

Use `Window.getComputedStyle()` to get the value of the CSS rule for the specified element.

## Translate

返回指定元素的CSS规则的值。

使用“ Window.getComputedStyle（）”来获取指定元素的CSS规则的值。

## Code

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
```

## Example

```js
getStyle(document.querySelector('p'), 'font-size'); // '16px'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
