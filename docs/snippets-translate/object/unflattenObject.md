# unflattenObject

使用键的路径展开对象。

结合使用Object.keys（obj）和Array.prototype.reduce（）将扁平化的路径节点转换为叶节点。
如果键的值包含点定界符（。），请使用Array.prototype.split（..），字符串转换和JSON.parse（）创建对象，然后使用Object.assign （）`创建叶子节点。
否则，将适当的键值对添加到累加器对象。

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
