# JSONtoCSV

Converts an array of objects to a comma-separated values (CSV) string that contains only the `columns` specified.

Use `Array.prototype.join(delimiter)` to combine all the names in `columns` to create the first row.
Use `Array.prototype.map()` and `Array.prototype.reduce()` to create a row for each object, substituting non-existent values with empty strings and only mapping values in `columns`.
Use `Array.prototype.join('\n')` to combine all rows into a string.
Omit the third argument, `delimiter`, to use a default delimiter of `,`.

## 翻译

将对象数组转换为仅包含指定“ columns”的逗号分隔值(CSV)字符串。

使用Array.prototype.join(delimiter)组合列中的所有名称以创建第一行。
使用Array.prototype.map()和Array.prototype.reduce()为每个对象创建一行，用空字符串替换不存在的值，仅映射“列”中的值。
使用Array.prototype.join('\ n')将所有行合并为一个字符串。
省略第三个参数“定界符”，以使用默认定界符“，”。

## 代码

```js
const JSONtoCSV = (arr, columns, delimiter = ',') =>
  [
    columns.join(delimiter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
        ''
      )
    )
  ].join('\n');
```

## 例子

```js
JSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], ['a', 'b']); // 'a,b\n"1","2"\n"3","4"\n"6",""\n"","7"'
JSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], ['a', 'b'], ';'); // 'a;b\n"1";"2"\n"3";"4"\n"6";""\n"";"7"'
```
