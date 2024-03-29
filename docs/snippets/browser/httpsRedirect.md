# httpsRedirect（-）

Redirects the page to HTTPS if its currently in HTTP. Also, pressing the back button doesn't take it back to the HTTP page as its replaced in the history.

Use `location.protocol` to get the protocol currently being used. If it's not HTTPS, use `location.replace()` to replace the existing page with the HTTPS version of the page. Use `location.href` to get the full address, split it with `String.prototype.split()` and remove the protocol part of the URL.

## 翻译

如果页面当前位于HTTP中，则将其重定向到HTTPS。此外，按返回按钮不会将其带回到HTTP页面，因为它已被替换为历史记录。

使用`location.protocol`获取当前正在使用的协议。如果不是HTTPS，请使用“ location.replace()”将现有页面替换为该页面的HTTPS版本。使用location.href获取完整的地址，使用String.prototype.split()对其进行拆分，并删除URL的协议部分。

## 代码

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};
```

## 例子

```js
httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
