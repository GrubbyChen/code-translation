# defer

Defers invoking a function until the current call stack has cleared.

Use `setTimeout()` with a timeout of 1ms to add a new event to the browser event queue and allow the rendering engine to complete its work. Use the spread (`...`) operator to supply the function with an arbitrary number of arguments.

## Translate

推迟调用函数，直到清除当前调用堆栈。

使用`setTimeout（）`，超时时间为1ms，可将新事件添加到浏览器事件队列中，并允许渲染引擎完成其工作。使用spread（`...`）运算符可以为函数提供任意数量的参数。

## Code

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);
```

## Example

```js
// Example A:
defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'

// Example B:
document.querySelector('#someElement').innerHTML = 'Hello';
longRunningFunction(); // Browser will not update the HTML until this has finished
defer(longRunningFunction); // Browser will update the HTML then run the function
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
