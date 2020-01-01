# elementContains

判断一个元素能否包含另一个元素。

如果 `parent` 元素包含 `child` 元素，则返回 `true`，否则返回 `false`。

## 代码

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);
```

## 例子

```js
elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
