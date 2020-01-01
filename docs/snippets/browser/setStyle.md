# setStyle

设置指定元素的 CSS 规则的值。

## 代码

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);
```

## 例子

```js
setStyle(document.querySelector('p'), 'font-size', '20px'); // The first <p> element on the page will have a font-size of 20px
```
