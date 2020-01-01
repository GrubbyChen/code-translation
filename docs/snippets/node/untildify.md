# untildify

将波浪号路径转换为绝对路径。

- 使用带有正则表达式的 `String.prototype.replace()` 和 `OS.homedir()` 来替换主目录路径中的〜。

## 代码

```js
const untildify = str => str.replace(/^~($|\/|\\)/, `${require('os').homedir()}$1`);
```

## 例子

```js
untildify('~/node'); // '/Users/aUser/node'
```
