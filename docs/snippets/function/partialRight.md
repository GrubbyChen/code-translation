# partialRight

Creates a function that invokes `fn` with `partials` appended to the arguments it receives.

Use the spread operator (`...`) to append `partials` to the list of arguments of `fn`.

## Translate

创建一个函数，该函数调用fn并在接收到的参数后附加partials。

使用扩展运算符（`...）将`partials`附加到`fn`的参数列表中。

## Code

```js
const partialRight = (fn, ...partials) => (...args) => fn(...args, ...partials);
```

## Example

```js
const greet = (greeting, name) => greeting + ' ' + name + '!';
const greetJohn = partialRight(greet, 'John');
greetJohn('Hello'); // 'Hello John!'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
