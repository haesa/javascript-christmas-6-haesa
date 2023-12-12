import { APPETIZER, DESSERT, DRINK, MAIN, MENU } from './constants/index.js';

const MENU_CATEGORY = {
  hasMenu(menu) {
    return MENU.has(menu);
  },

  hasDrink(menu) {
    return DRINK.has(menu);
  },

  getCategory(menu) {
    if (APPETIZER.has(menu)) {
      return '에피타이저';
    }

    if (MAIN.has(menu)) {
      return '메인';
    }

    if (DESSERT.has(menu)) {
      return '디저트';
    }

    if (DRINK.has(menu)) {
      return '음료';
    }
  },
};

export default MENU_CATEGORY;
