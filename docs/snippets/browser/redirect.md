# redirect

重定向到指定的 URL。

- 使用`window.location.href`或`window.location.replace()`重定向到`url`。
- 传递第二个参数来模拟链接单击（`true` - 默认值）或 HTTP 重定向(`false`)。

## 代码

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
```

## 例子

```js
redirect('https://google.com');
```
