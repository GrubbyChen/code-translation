# prefix

返回浏览器支持的 CSS 属性的前缀版本。

- 在前缀字符串数组上使用 `Array.prototype.findIndex()` 来测试 `document.body` 是否在 `CSSStyleDeclaration` 对象中定义了其中之一，未定义则返回 `null`。
- 使用 `String.prototype.charAt()` 和 `String.prototype.toUpperCase()` 将原字符的首字母大写。

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
