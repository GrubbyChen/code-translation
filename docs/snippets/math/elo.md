# elo

Computes the new ratings between two or more opponents using the [Elo rating system](https://en.wikipedia.org/wiki/Elo_rating_system). It takes an array
of pre-ratings and returns an array containing post-ratings.
The array should be ordered from best performer to worst performer (winner -> loser).

Use the exponent `**` operator and math operators to compute the expected score (chance of winning).
of each opponent and compute the new rating for each.
Loop through the ratings, using each permutation to compute the post-Elo rating for each player in a pairwise fashion. 
Omit the second argument to use the default `kFactor` of 32.

## Translate

使用[Elo评分系统]（https://en.wikipedia.org/wiki/Elo_rating_system）计算两个或多个对手之间的新评分。它需要一个数组
的前评分，并返回包含后评分的数组。
阵列应从性能最佳到性能最差的顺序排列（优胜者->失败者）。

使用指数运算符“ **”和数学运算符来计算预期分数（获胜机会）。
并计算每个对手的新等级。
循环浏览等级，使用每个排列以成对方式计算每个玩家的Elo后等级。
省略第二个参数以使用默认的kFactor值32。

## Code

```js
const elo = ([...ratings], kFactor = 32, selfRating) => {
  const [a, b] = ratings;
  const expectedScore = (self, opponent) => 1 / (1 + 10 ** ((opponent - self) / 400));
  const newRating = (rating, i) =>
    (selfRating || rating) + kFactor * (i - expectedScore(i ? a : b, i ? b : a));
  if (ratings.length === 2) return [newRating(a, 1), newRating(b, 0)];

  for (let i = 0, len = ratings.length; i < len; i++) {
    let j = i;
    while (j < len - 1) {
      j++;
      [ratings[i], ratings[j]] = elo([ratings[i], ratings[j]], kFactor);
    }
  }
  return ratings;
};
```

## Example

```js
// Standard 1v1s
elo([1200, 1200]); // [1216, 1184]
elo([1200, 1200], 64); // [1232, 1168]
// 4 player FFA, all same rank
elo([1200, 1200, 1200, 1200]).map(Math.round); // [1246, 1215, 1185, 1154]
/*
For teams, each rating can adjusted based on own team's average rating vs.
average rating of opposing team, with the score being added to their
own individual rating by supplying it as the third argument.
*/
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
