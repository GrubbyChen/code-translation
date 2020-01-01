# any

Returns `true` if the provided predicate function returns `true` for at least one element in a collection, `false` otherwise.

Use `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.
Omit the second argument, `fn`, to use `Boolean` as a default.

## 翻译

如果提供的谓词函数对集合中的至少一个元素返回“ true”，则返回“ true”，否则返回“ false”。

使用Array.prototype.some()来测试集合中是否有任何元素基于fn返回true。
省略第二个参数`fn`，以使用`Boolean'作为默认值。

## 代码

```js
const any = (arr, fn = Boolean) => arr.some(fn);
```

## 例子

```js
any([0, 1, 2, 0], x => x >= 2); // true
any([0, 0, 1, 0]); // true
```
