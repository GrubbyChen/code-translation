# on

将事件侦听器添加到具有使用事件委托功能的元素。

- 使用 `EventTarget.addEventListener()` 将事件侦听器添加到元素。如果选项对象提供了 `target` 属性，请确保事件目标与指定的目标匹配，然后通过提供正确的 `this` 上下文来调用回调。
- 返回对自定义委托函数的引用，以便可以与 `off` 函数一起使用。
- 省略 `opts` 参数，将默认不使用事件委托，且使用事件冒泡机制。

## 代码

```js
const on = (el, evt, fn, opts = {}) => {
  const delegatorFn = e => e.target.matches(opts.target) && fn.call(e.target, e);
  el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);
  if (opts.target) return delegatorFn;
};
```

## 例子

```js
const fn = () => console.log('!');
on(document.body, 'click', fn); // logs '!' upon clicking the body
on(document.body, 'click', fn, { target: 'p' }); // logs '!' upon clicking a `p` element child of the body
on(document.body, 'click', fn, { options: true }); // use capturing instead of bubbling
```
