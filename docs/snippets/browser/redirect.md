# redirect

Redirects to a specified URL.

Use `window.location.href` or `window.location.replace()` to redirect to `url`.
Pass a second argument to simulate a link click (`true` - default) or an HTTP redirect (`false`).

## Translate

重定向到指定的URL。

使用`window.location.href`或`window.location.replace（）`重定向到`url`。
传递第二个参数来模拟链接单击（默认为“ true”）或HTTP重定向（“ false”）。

## Code

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
```

## Example

```js
redirect('https://google.com');
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>