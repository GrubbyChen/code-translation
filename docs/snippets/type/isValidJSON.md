# isValidJSON

Checks if the provided string is a valid JSON.

Use `JSON.parse()` and a `try... catch` block to check if the provided string is a valid JSON.

## Translate

检查提供的字符串是否为有效的JSON。

使用`JSON.parse（）`和`try ... catch`块检查提供的字符串是否为有效的JSON。

## Code

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
```

## Example

```js
isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
