# untildify

Converts a tilde path to an absolute path.

Use `String.prototype.replace()` with a regular expression and `OS.homedir()` to replace the `~` in the start of the path with the home directory.

## Translate

将波浪号路径转换为绝对路径。

使用带有正则表达式的String.prototype.replace（）和OS.homedir（）来替换主目录路径中的〜。

## Code

```js
const untildify = str => str.replace(/^~($|\/|\\)/, `${require('os').homedir()}$1`);
```

## Example

```js
untildify('~/node'); // '/Users/aUser/node'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>