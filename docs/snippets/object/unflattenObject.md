# unflattenObject

使用键的路径展开对象。

- 使用 Object.keys(obj) 和 Array.prototype.reduce() 将扁平化的路径节点转换为叶节点。
- 如果键的值包含符号 `.`，解析成对象并使用键的路径展开对象。
- 否则，直接将键值对添加到目标对象。

## 代码

```js
const unflattenObject = obj =>
  Object.keys(obj).reduce((acc, k) => {
    if (k.indexOf('.') !== -1) {
      const keys = k.split('.');
      Object.assign(
        acc,
        JSON.parse(
          '{' +
            keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') +
            obj[k] +
            '}'.repeat(keys.length)
        )
      );
    } else acc[k] = obj[k];
    return acc;
  }, {});
```

## 例子

```js
unflattenObject({ 'a.b.c': 1, d: 1 }); // { a: { b: { c: 1 } }, d: 1 }
```
