# hasClass

如果元素具有指定的类，则返回 `true`，否则返回 `false`。

## 代码

```js
const hasClass = (el, className) => el.classList.contains(className);
```

## 例子

```js
hasClass(document.querySelector('p.special'), 'special'); // true
```
