# CSVToJSON

Converts a comma-separated values (CSV) string to a 2D array of objects.
The first row of the string is used as the title row.

Use `Array.prototype.slice()` and `Array.prototype.indexOf('\n')` and `String.prototype.split(delimiter)` to separate the first row (title row) into values.
Use `String.prototype.split('\n')` to create a string for each row, then `Array.prototype.map()` and `String.prototype.split(delimiter)` to separate the values in each row.
Use `Array.prototype.reduce()` to create an object for each row's values, with the keys parsed from the title row.
Omit the second argument, `delimiter`, to use a default delimiter of `,`.

## 翻译

将逗号分隔值（CSV）字符串转换为2D对象数组。
字符串的第一行用作标题行。

使用Array.prototype.slice（）和Array.prototype.indexOf（'\ n'）和String.prototype.split（delimiter）将第一行（标题行）分隔为多个值。
使用String.prototype.split（'\ n'）为每一行创建一个字符串，然后使用Array.prototype.map（）和String.prototype.split（delimiter）分隔每一行中的值。
使用Array.prototype.reduce（）为每行的值创建一个对象，并从标题行中解析键。
省略第二个参数`delimiter`，以使用默认定界符`，`。

## 代码

```js
const CSVToJSON = (data, delimiter = ',') => {
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      const values = v.split(delimiter);
      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
    });
};
```

## 例子

```js
CSVToJSON('col1,col2\na,b\nc,d'); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
CSVToJSON('col1;col2\na;b\nc;d', ';'); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
```
