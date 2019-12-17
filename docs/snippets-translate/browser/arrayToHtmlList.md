# arrayToHtmlList

将给定的数组元素转换成<li>标签，并将它们附加到给定id的列表中。

使用Array.prototype.map（），document.querySelector（）和匿名内部闭包来创建html标签列表。

## 代码

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
```

## 例子

```js
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```
