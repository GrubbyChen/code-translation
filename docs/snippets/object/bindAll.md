# bindAll

Binds methods of an object to the object itself, overwriting the existing method.

Use `Array.prototype.forEach()` to return a `function` that uses `Function.prototype.apply()` to apply the given context (`obj`) to `fn` for each function specified.

## Translate

将对象的方法绑定到对象本身，从而覆盖现有方法。

使用Array.prototype.forEach（）返回一个函数，该函数使用Function.prototype.apply（）将给定的上下文（obj）应用于每个指定的函数fn。

## Code

```js
const bindAll = (obj, ...fns) =>
  fns.forEach(
    fn => (
      (f = obj[fn]),
      (obj[fn] = function() {
        return f.apply(obj);
      })
    )
  );
```

## Example

```js
var view = {
  label: 'docs',
  click: function() {
    console.log('clicked ' + this.label);
  }
};
bindAll(view, 'click');
jQuery(element).on('click', view.click); // Logs 'clicked docs' when clicked.
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
