# hasFlags

检查当前进程的参数是否包含指定的标志。

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
