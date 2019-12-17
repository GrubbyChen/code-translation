# pluralize

Returns the singular or plural form of the word based on the input number. If the first argument is an `object`, it will use a closure by returning a function that can auto-pluralize words that don't simply end in `s` if the supplied dictionary contains the word.

If `num` is either `-1` or `1`, return the singular form of the word. If `num` is any other number, return the plural form. Omit the third argument to use the default of the singular word + `s`, or supply a custom pluralized word when necessary. If the first argument is an `object`, utilize a closure by returning a function which can use the supplied dictionary to resolve the correct plural form of the word.

## 翻译

根据输入数字返回单词的单数或复数形式。如果第一个参数是`object`，它将通过返回一个函数来使用闭包，该函数可以自动复数单词，如果提供的字典包含单词，这些单词不能简单地以`s`结尾。

如果num是-1或1，则返回单词的单数形式。如果num是其他任何数字，则返回复数形式。忽略第三个参数以使用单数词+`s`的默认值，或在必要时提供自定义的复数词。如果第一个参数是“对象”，则通过返回一个函数来利用闭包，该函数可以使用提供的字典来解析单词的正确复数形式。

## 代码

```js
const pluralize = (val, word, plural = word + 's') => {
  const _pluralize = (num, word, plural = word + 's') =>
    [1, -1].includes(Number(num)) ? word : plural;
  if (typeof val === 'object') return (num, word) => _pluralize(num, word, val[word]);
  return _pluralize(val, word, plural);
};
```

## 例子

```js
pluralize(0, 'apple'); // 'apples'
pluralize(1, 'apple'); // 'apple'
pluralize(2, 'apple'); // 'apples'
pluralize(2, 'person', 'people'); // 'people'

const PLURALS = {
  person: 'people',
  radius: 'radii'
};
const autoPluralize = pluralize(PLURALS);
autoPluralize(2, 'person'); // 'people'
```
