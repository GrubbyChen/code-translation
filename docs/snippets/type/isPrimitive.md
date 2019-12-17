# isPrimitive

Returns a boolean determining if the passed value is primitive or not.

Create an object from `val` and compare it with `val` to determine if the passed value is primitive (i.e. not equal to the created object).

## 翻译

返回一个布尔值，确定所传递的值是否为原始值。

从val中创建一个对象，并将其与val进行比较，以确定所传递的值是否为原始值（即不等于创建的对象）。

## 代码

```js
const isPrimitive = val => Object(val) !== val;
```

## 例子

```js
isPrimitive(null); // true
isPrimitive(50); // true
isPrimitive('Hello!'); // true
isPrimitive(false); // true
isPrimitive(Symbol()); // true
isPrimitive([]); // false
```
