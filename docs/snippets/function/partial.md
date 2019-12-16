# partial

Creates a function that invokes `fn` with `partials` prepended to the arguments it receives.

Use the spread operator (`...`) to prepend `partials` to the list of arguments of `fn`.

## Translate

创建一个函数，该函数使用在接收到的参数之前的`partials'调用`fn`。

使用扩展运算符（`...`）将`partials`放在`fn`的参数列表之前。

## Code

```js
const partial = (fn, ...partials) => (...args) => fn(...partials, ...args);
```

## Example

```js
const greet = (greeting, name) => greeting + ' ' + name + '!';
const greetHello = partial(greet, 'Hello');
greetHello('John'); // 'Hello John!'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
