# isAbsoluteURL

Returns `true` if the given string is an absolute URL, `false` otherwise.

Use a regular expression to test if the string is an absolute URL.

## Translate

如果给定的字符串是绝对URL，则返回“ true”，否则返回“ false”。

使用正则表达式测试字符串是否为绝对URL。

## Code

```js
const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);
```

## Example

```js
isAbsoluteURL('https://google.com'); // true
isAbsoluteURL('ftp://www.myserver.net'); // true
isAbsoluteURL('/foo/bar'); // false
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
