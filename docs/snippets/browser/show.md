# show（-）

Shows all the elements specified.

Use the spread operator (`...`) and `Array.prototype.forEach()` to clear the `display` property for each element specified.

## 翻译

显示所有指定的元素。

使用传播运算符(...)和Array.prototype.forEach()清除指定的每个元素的display属性。

## 代码

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));
```

## 例子

```js
show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```
