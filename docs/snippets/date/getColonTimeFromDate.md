# getColonTimeFromDate

Returns a string of the form `HH:MM:SS` from a `Date` object.

Use `Date.prototype.toTimeString()` and `String.prototype.slice()` to get the `HH:MM:SS` part of a given `Date` object.

## Translate

从“日期”对象返回格式为“ HH：MM：SS”的字符串。

使用`Date.prototype.toTimeString（）`和`String.prototype.slice（）`获取给定`Date`对象的`HH：MM：SS`部分。

## Code

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);
```

## Example

```js
getColonTimeFromDate(new Date()); // "08:38:00"
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
