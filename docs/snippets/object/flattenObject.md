# flattenObject

Flatten an object with the paths for keys.

Use recursion.
Use `Object.keys(obj)` combined with `Array.prototype.reduce()` to convert every leaf node to a flattened path node.
If the value of a key is an object, the function calls itself with the appropriate `prefix` to create the path using `Object.assign()`.
Otherwise, it adds the appropriate prefixed key-value pair to the accumulator object.
You should always omit the second argument, `prefix`, unless you want every key to have a prefix.

## 翻译

使用键的路径展平对象。

使用递归。
将Object.keys（obj）与Array.prototype.reduce（）结合使用，可以将每个叶节点转换为平坦的路径节点。
如果键的值是一个对象，则该函数使用适当的“前缀”调用自身，以使用“ Object.assign（）”创建路径。
否则，它将适当的前缀键值对添加到累加器对象。
除非您希望每个键都有一个前缀，否则应始终省略第二个参数“ prefix”。

## 代码

```js
const flattenObject = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});
```

## 例子

```js
flattenObject({ a: { b: { c: 1 } }, d: 1 }); // { 'a.b.c': 1, d: 1 }
```
