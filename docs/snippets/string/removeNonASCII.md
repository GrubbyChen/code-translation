# removeNonASCII

Removes non-printable ASCII characters.

Use a regular expression to remove non-printable ASCII characters.

## Translate

删除不可打印的ASCII字符。

使用正则表达式删除不可打印的ASCII字符。

## Code

```js
const removeNonASCII = str => str.replace(/[^\x20-\x7E]/g, '');
```

## Example

```js
removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ'); // 'lorem-ipsum'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
