# toOrdinalSuffix

在数字后添加序数后缀。

使用模运算符（`％`）查找一位和十位数的值。
查找匹配的序号数字。
如果在青少年模式中找到数字，请使用青少年序数。

## 代码

```js
const toOrdinalSuffix = num => {
  const int = parseInt(num),
    digits = [int % 10, int % 100],
    ordinals = ['st', 'nd', 'rd', 'th'],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? int + ordinals[digits[0] - 1]
    : int + ordinals[3];
};
```

## 例子

```js
toOrdinalSuffix('123'); // "123rd"
```
