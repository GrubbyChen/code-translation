# insertBefore

在指定元素的开头之前插入HTML字符串。

使用位置为“ beforebegin”的“ el.insertAdjacentHTML（）”来解析“ htmlString”并将其插入到“ el”开始之前。

## 代码

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);
```

## 例子

```js
insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```