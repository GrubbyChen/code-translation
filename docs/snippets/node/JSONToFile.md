# JSONToFile

Writes a JSON object to a file.

Use `fs.writeFile()`, template literals and `JSON.stringify()` to write a `json` object to a `.json` file.

## Translate

将JSON对象写入文件。

使用fs.writeFile（），模板文字和JSON.stringify（）将json对象写入.json文件。

## Code

```js
const fs = require('fs');
const JSONToFile = (obj, filename) =>
  fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));
```

## Example

```js
JSONToFile({ test: 'is passed' }, 'testJsonFile'); // writes the object to 'testJsonFile.json'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
