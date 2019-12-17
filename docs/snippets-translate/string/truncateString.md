# truncateString

将字符串截断到指定长度。

确定字符串的“长度”是否大于“ num”。
返回截断为所需长度的字符串，并在末尾附加“'...”或原始字符串。

## 代码

```js
const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
```

## 例子

```js
truncateString('boomerang', 7); // 'boom...'
```
