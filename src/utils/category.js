import { CATEGORY } from '../constants/index.js';

function getCategory(menu) {
  if (CATEGORY.menu.appetizer.includes(menu)) {
    return CATEGORY.appetizer;
  }

  if (CATEGORY.menu.main.includes(menu)) {
    return CATEGORY.main;
  }

  if (CATEGORY.menu.dessert.includes(menu)) {
    return CATEGORY.dessert;
  }

  return CATEGORY.drink;
}

export default getCategory;
