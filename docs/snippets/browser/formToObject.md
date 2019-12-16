# formToObject

Encode a set of form elements as an `object`.

Use the `FormData` constructor to convert the HTML `form` to `FormData`, `Array.from()` to convert to an array.
Collect the object from the array, using `Array.prototype.reduce()`.

## Translate

将一组表单元素编码为一个“对象”。

使用FormData构造函数将HTML form转换为FormData，将Array.from（）转换为数组。
使用“ Array.prototype.reduce（）”从数组中收集对象。

## Code

```js
const formToObject = form =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
```

## Example

```js
formToObject(document.querySelector('#form')); // { email: 'test@email.com', name: 'Test Name' }
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
