# objectToQueryString

返回从给定对象的键值对生成的查询字符串。

在Object.entries（queryParameters）上使用Array.prototype.reduce（）创建查询字符串。
根据“ queryString”的“ length”确定“ symbol”为“？”还是“＆”，并且仅在字符串形式的情况下将“ val”连接到“ queryString”。
当queryParameters为假时，返回queryString或一个空字符串。

## 代码

```js
const objectToQueryString = queryParameters => {
  return queryParameters
    ? Object.entries(queryParameters).reduce((queryString, [key, val], index) => {
        const symbol = queryString.length === 0 ? '?' : '&';
        queryString += typeof val === 'string' ? `${symbol}${key}=${val}` : '';
        return queryString;
      }, '')
    : '';
};
```

## 例子

```js
objectToQueryString({ page: '1', size: '2kg', key: undefined }); // '?page=1&size=2kg'
```
