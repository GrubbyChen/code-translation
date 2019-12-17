# hide

Hides all the elements specified.

Use `NodeList.prototype.forEach()` to apply `display: none` to each element specified.

## 翻译

隐藏所有指定的元素。

使用NodeList.prototype.forEach（）将display：none应用于指定的每个元素。

## 代码

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));
```

## 例子

```js
hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
