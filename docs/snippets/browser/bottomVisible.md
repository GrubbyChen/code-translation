# bottomVisible

Returns `true` if the bottom of the page is visible, `false` otherwise.

Use `scrollY`, `scrollHeight` and `clientHeight` to determine if the bottom of the page is visible.

## 翻译

如果页面底部可见，则返回“ true”，否则返回“ false”。

使用`scrollY`，`scrollHeight`和`clientHeight`确定页面底部是否可见。

## 代码

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);
```

## 例子

```js
bottomVisible(); // true
```
