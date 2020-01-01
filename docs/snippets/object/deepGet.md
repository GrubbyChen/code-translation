# deepGet

Returns the target value in a nested JSON object, based on the `keys` array.

Compare the keys you want in the nested JSON object as an `Array`.
Use `Array.prototype.reduce()` to get value from nested JSON object one by one. 
If the key exists in object, return target value, otherwise, return `null`.

## 翻译

根据 `keys` 数组返回对象中的目标值。

- 将您想要的对象中的键作为数组传入。
- 使用 `Array.prototype.reduce()` 从对象中一一地获取值。
- 如果键存在于对象中，则返回目标值，否则返回 `null`。

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
