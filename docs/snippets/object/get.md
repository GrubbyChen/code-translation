# get

Retrieve a set of properties indicated by the given selectors from an object.

Use `Array.prototype.map()` for each selector, `String.prototype.replace()` to replace square brackets with dots, `String.prototype.split('.')` to split each selector, `Array.prototype.filter()` to remove empty values and `Array.prototype.reduce()` to get the value indicated by it.

## Translate

从对象检索由给定选择器指示的一组属性。

对每个选择器使用“ Array.prototype.map（）”，“ String.prototype.replace（）”用点代替方括号，“ String.prototype.split（'。”）”用于拆分每个选择器“ Array”。 prototype.filter（）除去空值，而Array.prototype.reduce（）除去它指示的值。

## Code

```js
const get = (from, ...selectors) =>
  [...selectors].map(s =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  );
```

## Example

```js
const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };
get(obj, 'selector.to.val', 'target[0]', 'target[2].a'); // ['val to select', 1, 'test']
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
