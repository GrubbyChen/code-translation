# deepGet

根据`keys`数组返回嵌套JSON对象中的目标值。

将您想要的嵌套JSON对象中的键作为“数组”进行比较。
使用Array.prototype.reduce（）来从嵌套的JSON对象中一对一地获取值。
如果键存在于对象中，则返回目标值，否则返回“ null”。

## 代码

```js
const deepGet = (obj, keys) => keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), obj);
```

## 例子

```js
let index = 2;
const data = {
  foo: {
    foz: [1, 2, 3],
    bar: {
      baz: ['a', 'b', 'c']
    }
  }
};
deepGet(data, ['foo', 'foz', index]); // get 3
deepGet(data, ['foo', 'bar', 'baz', 8, 'foz']); // null
```
