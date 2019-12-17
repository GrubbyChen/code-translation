# JSONToFile

将JSON对象写入文件。

使用fs.writeFile（），模板文字和JSON.stringify（）将json对象写入.json文件。

## 代码

```js
const fs = require('fs');
const JSONToFile = (obj, filename) =>
  fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));
```

## 例子

```js
JSONToFile({ test: 'is passed' }, 'testJsonFile'); // writes the object to 'testJsonFile.json'
```
