# CSVToArray

将逗号分隔值（CSV）字符串转换为2D数组。

如果`omitFirstRow`为true，则使用Array.prototype.slice（）和Array.prototype.indexOf（'\ n'）删除第一行（标题行）。
使用String.prototype.split（'\ n'）为每一行创建一个字符串，然后使用String.prototype.split（delimiter）分隔每一行中的值。
省略第二个参数`delimiter`，以使用默认定界符`，`。
省略第三个参数“ omitFirstRow”，以包含CSV字符串的第一行（标题行）。

## 代码

```js
const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));
```

## 例子

```js
CSVToArray('a,b\nc,d'); // [['a','b'],['c','d']];
CSVToArray('a;b\nc;d', ';'); // [['a','b'],['c','d']];
CSVToArray('col1,col2\na,b\nc,d', ',', true); // [['a','b'],['c','d']];
```
