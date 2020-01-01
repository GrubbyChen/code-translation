# createElement

通过从字符串创建 HTML 元素（未将其添加到页面上）。如果给定的字符串包含多个元素，则仅返回第一个。

- 使用 `document.createElement()` 创建一个新的 `div` 元素。
- 使用 `innerHTML` 将参数提供的字符串设置到 `div` 元素中。
- 使用 `ParentNode.firstElementChild` 返回字符串表示的 HTML 元素。

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
