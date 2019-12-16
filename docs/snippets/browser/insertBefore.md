# insertBefore

Inserts an HTML string before the start of the specified element.

Use `el.insertAdjacentHTML()` with a position of `'beforebegin'` to parse `htmlString` and insert it before the start of `el`.

## Translate

在指定元素的开头之前插入HTML字符串。

使用位置为“ beforebegin”的“ el.insertAdjacentHTML（）”来解析“ htmlString”并将其插入到“ el”开始之前。

## Code

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);
```

## Example

```js
insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
