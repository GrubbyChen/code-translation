# negate（不知道什么用）

Negates a predicate function.

Take a predicate function and apply the not operator (`!`) to it with its arguments.

## 翻译

否定谓词功能。

采取一个谓词函数，并将not运算符(`！`)应用于其参数。

## 代码

```js
const negate = func => (...args) => !func(...args);
```

## 例子

```js
[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```
