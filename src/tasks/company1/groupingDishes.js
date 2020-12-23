export const groupingDishes = (arr) => {
  let dishCur, ingredientCur, dishFoundCur, dishNameCur, groupedDishCur = {};

  do {
    dishCur = arr.shift();
    dishNameCur = dishCur.shift();

    do {
      ingredientCur = dishCur.shift();
      dishFoundCur = searchDishesContainingIngredient(arr, ingredientCur);
      if (dishFoundCur.length > 0) {
        if (!groupedDishCur[ingredientCur]) {
          groupedDishCur[ingredientCur] = []
        }
        const groupedDishesArr = groupedDishCur[ingredientCur];
        if (groupedDishesArr.indexOf(dishNameCur) === -1) {
          groupedDishesArr.push(dishNameCur);
        }
        dishFoundCur.forEach(dish => {
          if (groupedDishesArr.indexOf(dish) === -1) {
            groupedDishesArr.push(dish);
          }
        });
      }
    } while(dishCur.length > 0);
  } while(arr.length > 0);

  const ret = Object.entries(groupedDishCur).sort((e1, e2) => {
    if(e1[0] < e2[0]) { return -1; }
    if(e1[0] > e2[0]) { return 1; }
    return 0;
  }).map(e => [e[0]].concat(e[1].sort()));
  return ret;
}

const searchDishesContainingIngredient = (arr, ingredient) => {
  const ret = [];
  arr.forEach(dish => {
    dish.forEach(ing => {
      if (ing === ingredient) {
        ret.push(dish[0]);
      }
    })
  })
  return ret;
}
