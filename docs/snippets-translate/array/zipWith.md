# zipWith

创建一个元素数组，根据原始数组中的位置进行分组，并使用function作为最后一个值来指定应如何组合分组的值。

检查提供的最后一个参数是否为函数。
使用`Math.max（）`获取参数中最长的数组。
创建一个以该长度为返回值的数组，并使用带有映射功能的Array.from（）创建一个分组元素数组。
如果参数数组的长度不同，则在找不到值的地方使用“ undefined”。
该函数由每个组（... group）的元素调用。

## 代码

```js
const zipWith = (...array) => {
  const fn = typeof array[array.length - 1] === 'function' ? array.pop() : undefined;
  return Array.from({ length: Math.max(...array.map(a => a.length)) }, (_, i) =>
    fn ? fn(...array.map(a => a[i])) : array.map(a => a[i])
  );
};
```

## 例子

```js
zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c); // [111,222]
zipWith(
  [1, 2, 3],
  [10, 20],
  [100, 200],
  (a, b, c) => (a != null ? a : 'a') + (b != null ? b : 'b') + (c != null ? c : 'c')
); // [111, 222, '3bc']
```
