# createEventHub

使用 `emit`、`on` 和 `off`方法创建一个 pub/sub 事件总线（发布-订阅）。

- 使用 `Object.create(null)` 创建一个空的 `hub` 对象，该对象不继承 `Object.prototype` 的属性。
- `on` 函数为事件创建一个数组（如果尚不存在），然后使用 `Array.prototype.push()` 可以添加多个句柄。
- `off` 函数使用 `Array.prototype.findIndex()` 在事件数组中查找处理程序的索引，然后使用 `Array.prototype.splice()` 将其删除。
- `emit` 函数基于 `event` 参数解析句柄数组，`Array.prototype.forEach()` 运行每个句柄并把参数传入。

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
