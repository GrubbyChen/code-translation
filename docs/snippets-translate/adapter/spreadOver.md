# spreadOver

接收可变参数函数并返回一个闭包，该闭包接受参数数组以映射到该函数的输入。

使用闭包和传播运算符（`...`）将参数数组映射到函数的输入。

## 代码

```js
const spreadOver = fn => argsArr => fn(...argsArr);
```

## 例子

```js
const arrayMax = spreadOver(Math.max);
arrayMax([1, 2, 3]); // 3
```
