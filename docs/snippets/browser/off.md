# off

Removes an event listener from an element.

Use `EventTarget.removeEventListener()` to remove an event listener from an element. 
Omit the fourth argument `opts` to use `false` or specify it based on the options used when the event listener was added.

## Translate

从元素中删除事件侦听器。

使用EventTarget.removeEventListener（）从元素中删除事件监听器。
忽略第四个参数“ opts”以使用“ false”或根据添加事件侦听器时使用的选项进行指定。

## Code

```js
const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);
```

## Example

```js
const fn = () => console.log('!');
document.body.addEventListener('click', fn);
off(document.body, 'click', fn); // no longer logs '!' upon clicking on the page
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
