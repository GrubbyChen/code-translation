# prettyBytes

将以字节为单位的数字转换为人类可读的字符串。

根据指数使用要访问的单位的数组字典。
使用Number.toPrecision（）将数字截断为一定位数。
考虑到提供的选项以及是否为负，通过构建返回的字符串。
忽略第二个参数`precision`以使用默认精度`3` digits。
省略第三个参数“ addSpace”，默认情况下在数字和单位之间添加空格。

## 代码

```js
const prettyBytes = (num, precision = 3, addSpace = true) => {
  const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0];
  const exponent = Math.min(Math.floor(Math.log10(num < 0 ? -num : num) / 3), UNITS.length - 1);
  const n = Number(((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision));
  return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];
};
```

## 例子

```js
prettyBytes(1000); // "1 KB"
prettyBytes(-27145424323.5821, 5); // "-27.145 GB"
prettyBytes(123456789, 3, false); // "123MB"
```
