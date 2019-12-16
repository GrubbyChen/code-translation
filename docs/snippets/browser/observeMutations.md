# observeMutations

Returns a new MutationObserver and runs the provided callback for each mutation on the specified element.

Use a [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to observe mutations on the given element.
Use `Array.prototype.forEach()` to run the callback for each mutation that is observed.
Omit the third argument, `options`, to use the default [options](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit) (all `true`).

## Translate

返回一个新的MutationObserver，并为指定元素上的每个突变运行提供的回调。

使用[`MutationObserver`]（https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver）观察给定元素的突变。
使用Array.prototype.forEach（）运行每个观察到的突变的回调。
省略第三个参数“ options”以使用默认的[options]（https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit）（全部为true）。

## Code

```js
const observeMutations = (element, callback, options) => {
  const observer = new MutationObserver(mutations => mutations.forEach(m => callback(m)));
  observer.observe(
    element,
    Object.assign(
      {
        childList: true,
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        subtree: true
      },
      options
    )
  );
  return observer;
};
```

## Example

```js
const obs = observeMutations(document, console.log); // Logs all mutations that happen on the page
obs.disconnect(); // Disconnects the observer and stops logging mutations on the page
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
