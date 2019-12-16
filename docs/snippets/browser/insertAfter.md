# insertAfter

Inserts an HTML string after the end of the specified element.

Use `el.insertAdjacentHTML()` with a position of `'afterend'` to parse `htmlString` and insert it after the end of `el`.

## Translate

在指定元素的末尾插入HTML字符串。

使用位置为“ afterend”的“ el.insertAdjacentHTML（）”来解析“ htmlString”并将其插入到“ el”的末尾之后。

## Code

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);
```

## Example

```js
insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
