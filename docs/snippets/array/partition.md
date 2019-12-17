# partition

Groups the elements into two arrays, depending on the provided function's truthiness for each element.

Use `Array.prototype.reduce()` to create an array of two arrays.
Use `Array.prototype.push()` to add elements for which `fn` returns `true` to the first array and elements for which `fn` returns `false` to the second one.

## 翻译

将元素分为两个数组，具体取决于每个元素提供的函数的真实性。

使用Array.prototype.reduce（）创建一个由两个数组组成的数组。
使用Array.prototype.push（）将第一个数组中的fn返回true的元素添加到第二个数组中false的元素。

## 代码

```js
const partition = (arr, fn) =>
  arr.reduce(
    (acc, val, i, arr) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
```

## 例子

```js
const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }];
partition(users, o => o.active); // [[{ 'user': 'fred',    'age': 40, 'active': true }],[{ 'user': 'barney',  'age': 36, 'active': false }]]
```
