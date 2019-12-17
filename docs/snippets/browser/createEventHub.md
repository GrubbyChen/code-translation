# createEventHub

Creates a pub/sub ([publish–subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)) event hub with `emit`, `on`, and `off` methods.

Use `Object.create(null)` to create an empty `hub` object that does not inherit properties from `Object.prototype`.
For `emit`, resolve the array of handlers based on the `event` argument and then run each one with `Array.prototype.forEach()` by passing in the data as an argument.
For `on`, create an array for the event if it does not yet exist, then use `Array.prototype.push()` to add the handler
to the array.
For `off`, use `Array.prototype.findIndex()` to find the index of the handler in the event array and remove it using `Array.prototype.splice()`.

## 翻译

使用`emit`，`on`和`off`方法创建一个pub / sub（[publish-subscribe]（https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern））事件中心。

使用Object.create（null）创建一个空的hub对象，该对象不继承Object.prototype的属性。
对于`emit`，请基于`event`参数解析处理程序数组，然后通过将数据作为参数传入来使用`Array.prototype.forEach（）`运行每个处理程序。
对于on，为事件创建一个数组（如果尚不存在），然后使用Array.prototype.push（）添加处理程序。
到阵列。
对于“ off”，使用“ Array.prototype.findIndex（）”在事件数组中查找处理程序的索引，然后使用“ Array.prototype.splice（）”将其删除。

## 代码

```js
const createEventHub = () => ({
  hub: Object.create(null),
  emit(event, data) {
    (this.hub[event] || []).forEach(handler => handler(data));
  },
  on(event, handler) {
    if (!this.hub[event]) this.hub[event] = [];
    this.hub[event].push(handler);
  },
  off(event, handler) {
    const i = (this.hub[event] || []).findIndex(h => h === handler);
    if (i > -1) this.hub[event].splice(i, 1);
    if (this.hub[event].length === 0) delete this.hub[event];
  }
});
```

## 例子

```js
const handler = data => console.log(data);
const hub = createEventHub();
let increment = 0;

// Subscribe: listen for different types of events
hub.on('message', handler);
hub.on('message', () => console.log('Message event fired'));
hub.on('increment', () => increment++);

// Publish: emit events to invoke all handlers subscribed to them, passing the data to them as an argument
hub.emit('message', 'hello world'); // logs 'hello world' and 'Message event fired'
hub.emit('message', { hello: 'world' }); // logs the object and 'Message event fired'
hub.emit('increment'); // `increment` variable is now 1

// Unsubscribe: stop a specific handler from listening to the 'message' event
hub.off('message', handler);
```
