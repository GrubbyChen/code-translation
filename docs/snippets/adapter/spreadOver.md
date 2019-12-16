# spreadOver

Takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function.

Use closures and the spread operator (`...`) to map the array of arguments to the inputs of the function.

## Translate

接收可变参数函数并返回一个闭包，该闭包接受参数数组以映射到该函数的输入。

使用闭包和传播运算符（`...`）将参数数组映射到函数的输入。

## Code

```js
const spreadOver = fn => argsArr => fn(...argsArr);
```

## Example

```js
const arrayMax = spreadOver(Math.max);
arrayMax([1, 2, 3]); // 3
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
