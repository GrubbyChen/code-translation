# getImages

Fetches all images from within an element and puts them into an array

Use `Element.prototype.getElementsByTagName()` to fetch all `<img>` elements inside the provided element, `Array.prototype.map()` to map every `src` attribute of their respective `<img>` element, then create a `Set` to eliminate duplicates and return the array.

## 翻译

从一个元素中获取所有图像并将它们放入一个数组中

使用Element.prototype.getElementsByTagName（）获取提供的元素中的所有<img>元素，使用Array.prototype.map（）映射其各自的<img>元素的每个src属性，然后创建一个“ Set”以消除重复项并返回数组。

## 代码

```js
const getImages = (el, includeDuplicates = false) => {
  const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));
  return includeDuplicates ? images : [...new Set(images)];
};
```

## 例子

```js
getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
getImages(document, false); // ['image1.jpg', 'image2.png', '...']
```
