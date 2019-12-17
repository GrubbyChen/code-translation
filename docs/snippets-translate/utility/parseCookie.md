# parseCookie

解析HTTP Cookie标头字符串，并返回所有cookie名称-值对的对象。

使用`String.prototype.split（';'）`来分隔键值对。
使用“ Array.prototype.map（）”和“ String.prototype.split（'='）`将键与每对值分开。
使用Array.prototype.reduce（）和decodeURIComponent（）创建具有所有键值对的对象。

## 代码

```js
const parseCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
```

## 例子

```js
parseCookie('foo=bar; equation=E%3Dmc%5E2'); // { foo: 'bar', equation: 'E=mc^2' }
```
