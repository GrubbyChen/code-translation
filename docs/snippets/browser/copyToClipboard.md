# copyToClipboard（需要 Demo）

将字符串复制到剪贴板，在用户操作后起作用（比如在 `click` 事件监听器中）。

⚠️ **注意：** 使用新的异步剪贴板 API 可以轻松实现相同的功能，该 API 仍处于试验阶段，应在将来代替此代码段使用。在[此处](https://github.com/w3c/clipboard-apis/blob/master/explainer.adoc#writing-to-the-clipboard)中找到更多有关它的信息。

- 创建一个新的 `<textarea>` 元素，用提供的数据填充，并将其添加到 `body` 中。
- 使用 `Selection.getRangeAt()` 存储所选范围（如果有）。
- 使用 `document.execCommand('copy')` 复制到剪贴板。
- 从 `body` 中删除 `<textarea>` 元素。
- 最后，使用 `Selection().addRange()` 恢复原始选定范围（如果有）。

## 代码

```js
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};
```

## 例子

```js
copyToClipboard('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard.
```
