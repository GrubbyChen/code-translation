# URLJoin

Joins all given URL segments together, then normalizes the resulting URL.

Use `String.prototype.join('/')` to combine URL segments, then a series of `String.prototype.replace()` calls with various regexps to normalize the resulting URL (remove double slashes, add proper slashes for protocol, remove slashes before parameters, combine parameters with `'&'` and normalize first parameter delimiter).

## 翻译

将所有给定的URL段连接在一起，然后标准化结果URL。

使用`String.prototype.join('/')`组合URL段，然后使用各种正则表达式对一系列`String.prototype.replace()`进行调用以标准化结果URL(删除双斜杠，为协议添加适当的斜杠) ，在参数前删除斜线，将参数与“'＆'`组合在一起并标准化第一个参数定界符)。

## 代码

```js
const URLJoin = (...args) =>
  args
    .join('/')
    .replace(/[\/]+/g, '/')
    .replace(/^(.+):\//, '$1://')
    .replace(/^file:/, 'file:/')
    .replace(/\/(\?|&|#[^!])/g, '$1')
    .replace(/\?/g, '&')
    .replace('&', '?');
```

## 例子

```js
URLJoin('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo'); // 'http://www.google.com/a/b/cd?foo=123&bar=foo'
```
