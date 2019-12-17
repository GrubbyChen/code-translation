# httpPost

Makes a `POST` request to the passed URL.

Use [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) web api to make a `post` request to the given `url`.
Set the value of an `HTTP` request header with `setRequestHeader` method.
Handle the `onload` event, by calling the given `callback` the `responseText`.
Handle the `onerror` event, by running the provided `err` function.
Omit the third argument, `data`, to send no data to the provided `url`.
Omit the fourth argument, `err`, to log errors to the console's `error` stream by default.

## 翻译

向传递的URL发出POST请求。

使用[`XMLHttpRequest`]（https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest）网络api向给定的“ url”发出“ post”请求。
使用setRequestHeader方法设置HTTP请求标头的值。
通过将给定的“回调”称为“ responseText”来处理“ onload”事件。
通过运行提供的`err`函数来处理'onerror'事件。
省略第三个参数“ data”，以不将任何数据发送到提供的“ url”。
省略第四个参数“ err”，默认情况下会将错误记录到控制台的“ error”流中。

## 代码

```js
const httpPost = (url, data, callback, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send(data);
};
```

## 例子

```js
const newPost = {
  userId: 1,
  id: 1337,
  title: 'Foo',
  body: 'bar bar bar'
};
const data = JSON.stringify(newPost);
httpPost(
  'https://jsonplaceholder.typicode.com/posts',
  data,
  console.log
); /*
Logs: {
  "userId": 1,
  "id": 1337,
  "title": "Foo",
  "body": "bar bar bar"
}
*/
httpPost(
  'https://jsonplaceholder.typicode.com/posts',
  null, // does not send a body
  console.log
); /*
Logs: {
  "id": 101
}
*/
```
