# createDirIfNotExists

Creates a directory, if it does not exist.

Use `fs.existsSync()` to check if the directory exists, `fs.mkdirSync()` to create it.

## 翻译

创建目录（如果不存在）。

使用“ fs.existsSync（）”检查目录是否存在，使用“ fs.mkdirSync（）”创建目录。

## 代码

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
```

## 例子

```js
createDirIfNotExists('test'); // creates the directory 'test', if it doesn't exist
```
