# isBrowserTabFocused

如果页面的浏览器标签集中，则返回“ true”，否则返回“ false”。

使用由页面可见性API引入的“ Document.hidden”属性来检查页面的浏览器标签是否可见或隐藏。

## 代码

```js
const isBrowserTabFocused = () => !document.hidden;
```

## 例子

```js
isBrowserTabFocused(); // true
```
