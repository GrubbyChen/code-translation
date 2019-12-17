# toggleClass

Toggle a class for an element.

Use `element.classList.toggle()` to toggle the specified class for the element.

## 翻译

切换元素的类。

使用`element.classList.toggle（）`切换元素的指定类。

## 代码

```js
const toggleClass = (el, className) => el.classList.toggle(className);
```

## 例子

```js
toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```
