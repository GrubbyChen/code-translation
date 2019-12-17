# hasClass

Returns `true` if the element has the specified class, `false` otherwise.

Use `element.classList.contains()` to check if the element has the specified class.

## 翻译

如果元素具有指定的类，则返回“ true”，否则返回“ false”。

使用`element.classList.contains（）`检查元素是否具有指定的类。

## 代码

```js
const hasClass = (el, className) => el.classList.contains(className);
```

## 例子

```js
hasClass(document.querySelector('p.special'), 'special'); // true
```
