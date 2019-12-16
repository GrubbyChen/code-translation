# unflattenObject

Unflatten an object with the paths for keys.

Use `Object.keys(obj)` combined with `Array.prototype.reduce()` to convert flattened path node to a leaf node.
If the value of a key contains a dot delimiter (`.`), use `Array.prototype.split('.')`, string transformations and `JSON.parse()` to create an object, then `Object.assign()` to create the leaf node.
Otherwise, add the appropriate key-value pair to the accumulator object.

## Translate

使用键的路径展开对象。

结合使用Object.keys（obj）和Array.prototype.reduce（）将扁平化的路径节点转换为叶节点。
如果键的值包含点定界符（。），请使用Array.prototype.split（..），字符串转换和JSON.parse（）创建对象，然后使用Object.assign （）`创建叶子节点。
否则，将适当的键值对添加到累加器对象。

## Code

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

## Example

```js
unflattenObject({ 'a.b.c': 1, d: 1 }); // { a: { b: { c: 1 } }, d: 1 }
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
