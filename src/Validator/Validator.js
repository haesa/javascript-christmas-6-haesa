import { CATEGORY, ERROR, MENU } from '../constants/index.js';
import getCategory from '../utils/category.js';

class Validator {
  static validateDate(input) {
    if (/[^\d]/.test(input) || Number(input) < 1 || Number(input) > 31) {
      throw new Error(ERROR.invalidDate);
    }
  }

  static validateOrder(input) {
    Validator.#validateFormat(input);

    const orders = input.split(',');
    Validator.#validateMenu(orders);
    Validator.#validateOrderQuantity(orders);
  }

  static #validateFormat(input) {
    if (!/^([^\d]+-\d+)(,[^\d]+-\d+)*$/.test(input)) {
      throw new Error(ERROR.invalidOrder);
    }
  }

  static #validateMenu(orders) {
    const menus = orders.map(order => order.split('-')[0]);

    if (menus.some(menu => !MENU.includes(menu))) {
      throw new Error(ERROR.invalidOrder);
    }

    if (new Set(menus).size !== menus.length) {
      throw new Error(ERROR.invalidOrder);
    }

    if (Validator.#isOnlyDrinkMenu(menus)) {
      throw new Error(ERROR.noDrinkOrderOnly);
    }
  }

  static #validateOrderQuantity(orders) {
    const quantityArray = orders.map(order => {
      const [_, quantity] = order.split('-');
      return Number(quantity);
    });

    if (quantityArray.some(quantity => quantity < 1)) {
      throw new Error(ERROR.invalidOrder);
    }

    if (quantityArray.reduce((total, quantity) => total + quantity, 0) > 20) {
      throw new Error(ERROR.maxOrderQuantity);
    }
  }

  static #isOnlyDrinkMenu(menus) {
    const drinkMenu = menus.filter(
      menu => getCategory(menu) === CATEGORY.drink
    );
    return drinkMenu.length === menus.length;
  }
}

export default Validator;
