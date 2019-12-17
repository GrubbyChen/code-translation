# insertAfter

在指定元素的末尾插入HTML字符串。

使用位置为“ afterend”的“ el.insertAdjacentHTML（）”来解析“ htmlString”并将其插入到“ el”的末尾之后。

## 代码

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);
```

## 例子

```js
insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
