# arrayToCSV

Converts a 2D array to a comma-separated values (CSV) string.

Use `Array.prototype.map()` and `Array.prototype.join(delimiter)` to combine individual 1D arrays (rows) into strings.
Use `Array.prototype.join('\n')` to combine all rows into a CSV string, separating each row with a newline.
Omit the second argument, `delimiter`, to use a default delimiter of `,`.

## 翻译

将二维数组转换为逗号分隔值(CSV)字符串。

使用Array.prototype.map()和Array.prototype.join(delimiter)将单个一维数组(行)组合成字符串。
使用Array.prototype.join('\ n')将所有行合并为CSV字符串，并用换行符分隔每一行。
省略第二个参数`delimiter`，以使用默认定界符`，`。

## 代码

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr
    .map(v => v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter))
    .join('\n');
```

## 例子

```js
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
arrayToCSV([['a', '"b" great'], ['c', 3.1415]]); // '"a","""b"" great"\n"c",3.1415'
```
