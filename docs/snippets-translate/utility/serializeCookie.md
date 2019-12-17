# serializeCookie

将Cookie名称/值对序列化为Set-Cookie标头字符串。

使用模板文字和`encodeURIComponent（）`创建适当的字符串。

## 代码

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
```

## 例子

```js
serializeCookie('foo', 'bar'); // 'foo=bar'
```
