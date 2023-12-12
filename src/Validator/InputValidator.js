import { ERROR_MESSAGE, REGEX } from '../constants';
import { hasDrink, hasMenu } from '../Menus';

const InputValidator = {
  validateDate(input) {
    if (!REGEX.number(input)) {
      throw new Error(ERROR_MESSAGE.date);
    }

    if (Number(input) < 1 || Number(input) > 31) {
      throw new Error(ERROR_MESSAGE.date);
    }
  },

  validateOrders(input) {
    if (!REGEX.orderFormat(input)) {
      throw new Error(ERROR_MESSAGE.orders);
    }

    const menus = input.split(',').map((order) => order.split('-')[0]);
    if (menus.some((menu) => !hasMenu(menu))) {
      throw new Error(ERROR_MESSAGE.orders);
    }

    if (menus.every((menu) => hasDrink(menu))) {
      throw new Error(ERROR_MESSAGE.orders);
    }

    if (new Set(menus).size !== menus.length) {
      throw new Error(ERROR_MESSAGE.orders);
    }

    const amounts = input.split(',').map((order) => order.split('-')[2]);
    if (amounts.some((amount) => !REGEX.number(amount) || Number(amount) < 1)) {
      throw new Error(ERROR_MESSAGE.orders);
    }

    const totalAmount = amounts.reduce((total, amount) => total + amount, 0);
    if (totalAmount > 20) {
      throw new Error(ERROR_MESSAGE.orders);
    }
  },
};
export default InputValidator;
