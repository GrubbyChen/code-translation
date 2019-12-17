# setStyle

Sets the value of a CSS rule for the specified element.

Use `element.style` to set the value of the CSS rule for the specified element to `val`.

## 翻译

设置指定元素的CSS规则的值。

使用`element.style`将指定元素的CSS规则的值设置为`val`。

## 代码

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);
```

## 例子

```js
setStyle(document.querySelector('p'), 'font-size', '20px'); // The first <p> element on the page will have a font-size of 20px
```
