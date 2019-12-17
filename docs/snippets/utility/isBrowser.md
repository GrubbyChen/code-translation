# isBrowser

Determines if the current runtime environment is a browser so that front-end modules can run on the server (Node) without throwing errors.

Use `Array.prototype.includes()` on the `typeof` values of both `window` and `document` (globals usually only available in a browser environment unless they were explicitly defined), which will return `true` if one of them is `undefined`.
`typeof` allows globals to be checked for existence without throwing a `ReferenceError`.
If both of them are not `undefined`, then the current environment is assumed to be a browser.

## 翻译

确定当前运行时环境是否是浏览器，以便前端模块可以在服务器（节点）上运行而不会引发错误。

在“窗口”和“文档”的“ typeof”值上使用“ Array.prototype.includes（）”（全局变量通常仅在浏览器环境中可用，除非明确定义它们），如果其中之一被返回，则将返回“ true”它们是未定义的。
使用typeof可以检查全局变量是否存在，而不会抛出ReferenceError。
如果它们都不都是未定义的，则假定当前环境为浏览器。

## 代码

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');
```

## 例子

```js
isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
