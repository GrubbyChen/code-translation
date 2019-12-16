# functions

Returns an array of function property names from own (and optionally inherited) enumerable properties of an object.

Use `Object.keys(obj)` to iterate over the object's own properties.
If `inherited` is `true`, use `Object.get.PrototypeOf(obj)` to also get the object's inherited properties.
Use `Array.prototype.filter()` to keep only those properties that are functions.
Omit the second argument, `inherited`, to not include inherited properties by default.

## Translate

从对象自己的（并且可选地继承）可枚举属性中返回函数属性名称的数组。

使用Object.keys（obj）迭代对象本身的属性。
如果“继承”为“ true”，则使用“ Object.get.PrototypeOf（obj）”来获取对象的继承属性。
使用Array.prototype.filter（）仅保留那些作为函数的属性。
省略第二个参数“继承”，默认情况下不包括继承的属性。

## Code

```js
const functions = (obj, inherited = false) =>
  (inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj)
  ).filter(key => typeof obj[key] === 'function');
```

## Example

```js
function Foo() {
  this.a = () => 1;
  this.b = () => 2;
}
Foo.prototype.c = () => 3;
functions(new Foo()); // ['a', 'b']
functions(new Foo(), true); // ['a', 'b', 'c']
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>