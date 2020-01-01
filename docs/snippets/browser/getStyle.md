# getStyle

返回指定元素的CSS规则的值。

## 代码

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
```

## 例子

```js
getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
