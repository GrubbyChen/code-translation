# createElement

从字符串创建元素（不将其附加到文档中）。
如果给定的字符串包含多个元素，则仅返回第一个。

使用`document.createElement（）`创建一个新元素。
将其“ innerHTML”设置为作为参数提供的字符串。
使用“ ParentNode.firstElementChild”返回字符串的元素版本。

## 代码

```js
const createElement = str => {
  const el = document.createElement('div');
  el.innerHTML = str;
  return el.firstElementChild;
};
```

## 例子

```js
const el = createElement(
  `<div class="container">
    <p>Hello!</p>
  </div>`
);
console.log(el.className); // 'container'
```
