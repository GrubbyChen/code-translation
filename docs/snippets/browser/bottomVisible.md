# bottomVisible

Returns `true` if the bottom of the page is visible, `false` otherwise.

Use `scrollY`, `scrollHeight` and `clientHeight` to determine if the bottom of the page is visible.

## Translate

如果页面底部可见，则返回“ true”，否则返回“ false”。

使用`scrollY`，`scrollHeight`和`clientHeight`确定页面底部是否可见。

## Code

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);
```

## Example

```js
bottomVisible(); // true
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
