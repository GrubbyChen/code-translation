# hasFlags

Check if the current process's arguments contain the specified flags.

Use `Array.prototype.every()` and `Array.prototype.includes()` to check if `process.argv` contains all the specified flags.
Use a regular expression to test if the specified flags are prefixed with `-` or `--` and prefix them accordingly.

## 翻译

检查当前进程的参数是否包含指定的标志。

使用Array.prototype.every（）和Array.prototype.includes（）检查process.argv是否包含所有指定标志。
使用正则表达式测试指定的标志是否以“-”或“-”为前缀，并相应地为它们添加前缀。

## 代码

```js
const hasFlags = (...flags) =>
  flags.every(flag => process.argv.includes(/^-{1,2}/.test(flag) ? flag : '--' + flag));
```

## 例子

```js
// node myScript.js -s --test --cool=true
hasFlags('-s'); // true
hasFlags('--test', 'cool=true', '-s'); // true
hasFlags('special'); // false
```
