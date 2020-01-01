# functions

从对象自己的可枚举属性中返回函数属性名称的数组。 

- 使用 `Object.keys(obj)` 迭代对象本身的属性。
- 使用 `Array.prototype.filter()` 仅保留那些作为函数的属性。
- 第二个参数 `inherited` 为 `true`，则使用 `Object.get.PrototypeOf(obj)` 来获取对象的继承属性，默认为 `false`。

## 代码

```js
const functions = (obj, inherited = false) =>
  (inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj)
  ).filter(key => typeof obj[key] === 'function');
```

## 例子

```js
function Foo() {
  this.a = () => 1;
  this.b = () => 2;
}
Foo.prototype.c = () => 3;
functions(new Foo()); // ['a', 'b']
functions(new Foo(), true); // ['a', 'b', 'c']
```
