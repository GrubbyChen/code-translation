# triggerEvent

Triggers a specific event on a given element, optionally passing custom data.

Use `new CustomEvent()` to create an event from the specified `eventType` and details.
Use `el.dispatchEvent()` to trigger the newly created event on the given element.
Omit the third argument, `detail`, if you do not want to pass custom data to the triggered event.

## Translate

在给定元素上触发特定事件，可以选择传递自定义数据。

使用`new CustomEvent（）`根据指定的`eventType`和详细信息创建一个事件。
使用`el.dispatchEvent（）`在给定元素上触发新创建的事件。
如果您不想将自定义数据传递给触发的事件，请忽略第三个参数“ detail”。

## Code

```js
const triggerEvent = (el, eventType, detail) =>
  el.dispatchEvent(new CustomEvent(eventType, { detail }));
```

## Example

```js
triggerEvent(document.getElementById('myId'), 'click');
triggerEvent(document.getElementById('myId'), 'click', { username: 'bob' });
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
