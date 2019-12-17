# readFileLines

Returns an array of lines from the specified file.

Use `readFileSync` function in `fs` node package to create a `Buffer` from a file.
convert buffer to string using `toString(encoding)` function.
creating an array from contents of file by `split`ing file content line by line (each `\n`).

## 翻译

返回指定文件中的行数组。

在`fs`节点包中使用`readFileSync`函数从文件创建`Buffer'。
使用toString（encoding）函数将缓冲区转换为字符串。
通过逐行拆分文件内容（每个\ n）从文件内容创建数组。

## 代码

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');
```

## 例子

```js
/*
contents of test.txt :
  line1
  line2
  line3
  ___________________________
*/
let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```
