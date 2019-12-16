# httpGet

Makes a `GET` request to the passed URL.

Use [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) web api to make a `get` request to the given `url`.
Handle the `onload` event, by calling the given `callback` the `responseText`.
Handle the `onerror` event, by running the provided `err` function.
Omit the third argument, `err`, to log errors to the console's `error` stream by default.

## Translate

向传递的URL发出“ GET”请求。

使用[`XMLHttpRequest`]（https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest）Web api对给定的“ url”发出“ get”请求。
通过将给定的“回调”称为“ responseText”来处理“ onload”事件。
通过运行提供的`err`函数来处理'onerror'事件。
省略第三个参数“ err”，默认情况下将错误记录到控制台的“ error”流中。

## Code

```js
const httpGet = (url, callback, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send();
};
```

## Example

```js
httpGet(
  'https://jsonplaceholder.typicode.com/posts/1',
  console.log
); /*
Logs: {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
