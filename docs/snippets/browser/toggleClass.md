# toggleClass

Toggle a class for an element.

Use `element.classList.toggle()` to toggle the specified class for the element.

## Translate

切换元素的类。

使用`element.classList.toggle（）`切换元素的指定类。

## Code

```js
const toggleClass = (el, className) => el.classList.toggle(className);
```

## Example

```js
toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
