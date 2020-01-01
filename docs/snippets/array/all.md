# all

Returns `true` if the provided predicate function returns `true` for all elements in a collection, `false` otherwise.

Use `Array.prototype.every()` to test if all elements in the collection return `true` based on `fn`.
Omit the second argument, `fn`, to use `Boolean` as a default.

## 翻译

如果提供的谓词函数对集合中的所有元素都返回“ true”，则返回“ true”，否则返回“ false”。

使用Array.prototype.every()来测试集合中的所有元素是否都基于fn返回true。
省略第二个参数`fn`，以使用`Boolean'作为默认值。

## 代码

```js
const all = (arr, fn = Boolean) => arr.every(fn);
```

## 例子

```js
all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
