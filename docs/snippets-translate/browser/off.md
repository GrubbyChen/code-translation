# off

从元素中删除事件侦听器。

使用EventTarget.removeEventListener（）从元素中删除事件监听器。
忽略第四个参数“ opts”以使用“ false”或根据添加事件侦听器时使用的选项进行指定。

## 代码

```js
const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);
```

## 例子

```js
const fn = () => console.log('!');
document.body.addEventListener('click', fn);
off(document.body, 'click', fn); // no longer logs '!' upon clicking on the page
```
