# isValidJSON

检查提供的字符串是否为有效的 `JSON`。

## 代码

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
```

## 例子

```js
isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```
