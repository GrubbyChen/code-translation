# readFileLines

返回指定文件中的行数组。

- 使用 `readFileSync` 函数读取文件流。
- 使用 `toString(encoding)` 函数将文件流转换为字符串。
- 通过逐行拆分文件内容（每个 `\n`），创建文件内容行数组。

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
