# insertBefore

在指定元素的开头之前插入 HTML 字符串。

- `insertAdjacentHTML()` 将指定的文本解析为 HTML 或 XML，并将结果节点插入到 DOM 树中的指定位置。
- `beforebegin`: 元素自身的前面。
- `afterbegin`: 插入元素内部的第一个子节点之前。
- `beforeend`: 插入元素内部的最后一个子节点之后。
- `afterend`: 元素自身的后面。

## 代码

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);
```

## 例子

```js
insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```
