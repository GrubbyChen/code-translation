# elementContains

Returns `true` if the `parent` element contains the `child` element, `false` otherwise.

Check that `parent` is not the same element as `child`, use `parent.contains(child)` to check if the `parent` element contains the `child` element.

## 翻译

如果“ parent”元素包含“ child”元素，则返回“ true”，否则返回“ false”。

检查“ parent”和“ child”不是相同的元素，请使用“ parent.contains（child）”来检查“ parent”元素是否包含“ child”元素。

## 代码

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);
```

## 例子

```js
elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
