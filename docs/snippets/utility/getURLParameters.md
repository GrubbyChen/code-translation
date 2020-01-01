# getURLParameters

Returns an object containing the parameters of the current URL.

Use `String.match()` with an appropriate regular expression to get all key-value pairs, `Array.prototype.reduce()` to map and combine them into a single object.
Pass `location.search` as the argument to apply to the current `url`.

## 翻译

返回一个包含当前URL参数的对象。

使用带有适当正则表达式的String.match()获取所有键值对，Array.prototype.reduce()映射并将它们组合为单个对象。
将location.search作为参数传递给当前的URL。

## 代码

```js
const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  );
```

## 例子

```js
getURLParameters('http://url.com/page?name=Adam&surname=Smith'); // {name: 'Adam', surname: 'Smith'}
getURLParameters('google.com'); // {}
```
