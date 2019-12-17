# serializeForm

Encode a set of form elements as a query string.

Use the `FormData` constructor to convert the HTML `form` to `FormData`, `Array.from()` to convert to an array, passing a map function as the second argument.
Use `Array.prototype.map()` and `window.encodeURIComponent()` to encode each field's value.
Use `Array.prototype.join()` with appropriate argumens to produce an appropriate query string.

## 翻译

将一组表单元素编码为查询字符串。

使用FormData构造函数将HTML form转换为FormData，将Array.from（）转换为数组，并使用map函数作为第二个参数。
使用Array.prototype.map（）和window.encodeURIComponent（）编码每个字段的值。
将Array.prototype.join（）与适当的参数一起使用以产生适当的查询字符串。

## 代码

```js
const serializeForm = form =>
  Array.from(new FormData(form), field => field.map(encodeURIComponent).join('=')).join('&');
```

## 例子

```js
serializeForm(document.querySelector('#form')); // email=test%40email.com&name=Test%20Name
```
