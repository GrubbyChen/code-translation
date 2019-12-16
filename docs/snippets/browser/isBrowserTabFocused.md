# isBrowserTabFocused

Returns `true` if the browser tab of the page is focused, `false` otherwise.

Use the `Document.hidden` property, introduced by the Page Visibility API to check if the browser tab of the page is visible or hidden.

## Translate

如果页面的浏览器标签集中，则返回“ true”，否则返回“ false”。

使用由页面可见性API引入的“ Document.hidden”属性来检查页面的浏览器标签是否可见或隐藏。

## Code

```js
const isBrowserTabFocused = () => !document.hidden;
```

## Example

```js
isBrowserTabFocused(); // true
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
