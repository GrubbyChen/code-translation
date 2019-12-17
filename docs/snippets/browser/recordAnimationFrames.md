# recordAnimationFrames

Invokes the provided callback on each animation frame.

Use recursion. 
Provided that `running` is `true`, continue invoking `window.requestAnimationFrame()` which invokes the provided callback. 
Return an object with two methods `start` and `stop` to allow manual control of the recording. 
Omit the second argument, `autoStart`, to implicitly call `start` when the function is invoked.

## 翻译

在每个动画帧上调用提供的回调。

使用递归。
假设“运行”为“真”，请继续调用“ window.requestAnimationFrame（）”，后者将调用提供的回调。
返回带有“ start”和“ stop”两种方法的对象，以允许手动控制记录。
省略第二个参数“ autoStart”，以在调用函数时隐式调用“ start”。

## 代码

```js
const recordAnimationFrames = (callback, autoStart = true) => {
  let running = true,
    raf;
  const stop = () => {
    running = false;
    cancelAnimationFrame(raf);
  };
  const start = () => {
    running = true;
    run();
  };
  const run = () => {
    raf = requestAnimationFrame(() => {
      callback();
      if (running) run();
    });
  };
  if (autoStart) start();
  return { start, stop };
};
```

## 例子

```js
const cb = () => console.log('Animation frame fired');
const recorder = recordAnimationFrames(cb); // logs 'Animation frame fired' on each animation frame
recorder.stop(); // stops logging
recorder.start(); // starts again
const recorder2 = recordAnimationFrames(cb, false); // `start` needs to be explicitly called to begin recording frames
```
