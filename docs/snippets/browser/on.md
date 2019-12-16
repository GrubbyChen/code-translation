# on

Adds an event listener to an element with the ability to use event delegation.

Use `EventTarget.addEventListener()` to add an event listener to an element. If there is a `target` property supplied to the options object, ensure the event target matches the target specified and then invoke the callback by supplying the correct `this` context.
Returns a reference to the custom delegator function, in order to be possible to use with [`off`](#off).
Omit `opts` to default to non-delegation behavior and event bubbling.

## Translate

将事件侦听器添加到具有使用事件委托功能的元素。

使用EventTarget.addEventListener（）将事件侦听器添加到元素。如果选项对象提供了“ target”属性，请确保事件目标与指定的目标匹配，然后通过提供正确的“ this”上下文来调用回调。
返回对自定义委托函数的引用，以便可以与[`off`]（＃off）一起使用。
省略“ opts”默认为非授权行为和事件冒泡。

## Code

```js
const on = (el, evt, fn, opts = {}) => {
  const delegatorFn = e => e.target.matches(opts.target) && fn.call(e.target, e);
  el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);
  if (opts.target) return delegatorFn;
};
```

## Example

```js
const fn = () => console.log('!');
on(document.body, 'click', fn); // logs '!' upon clicking the body
on(document.body, 'click', fn, { target: 'p' }); // logs '!' upon clicking a `p` element child of the body
on(document.body, 'click', fn, { options: true }); // use capturing instead of bubbling
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
