# prefix

Returns the prefixed version (if necessary) of a CSS property that the browser supports.

Use `Array.prototype.findIndex()` on an array of vendor prefix strings to test if `document.body` has one of them defined in its `CSSStyleDeclaration` object, otherwise return `null`.
Use `String.prototype.charAt()` and `String.prototype.toUpperCase()` to capitalize the property, which will be appended to the vendor prefix string.

## 翻译

返回浏览器支持的CSS属性的前缀版本（如有必要）。

在供应商前缀字符串数组上使用Array.prototype.findIndex（）来测试document.body是否在CSSStyleDeclaration对象中定义了其中之一，否则返回null。
使用`String.prototype.charAt（）`和`String.prototype.toUpperCase（）`将属性大写，该属性将追加到供应商前缀字符串中。

## 代码

```js
const prefix = prop => {
  const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1);
  const prefixes = ['', 'webkit', 'moz', 'ms', 'o'];
  const i = prefixes.findIndex(
    prefix => typeof document.body.style[prefix ? prefix + capitalizedProp : prop] !== 'undefined'
  );
  return i !== -1 ? (i === 0 ? prop : prefixes[i] + capitalizedProp) : null;
};
```

## 例子

```js
prefix('appearance'); // 'appearance' on a supported browser, otherwise 'webkitAppearance', 'mozAppearance', 'msAppearance' or 'oAppearance'
```
