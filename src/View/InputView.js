import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/index.js';
import InputValidator from '../Validator/InputValidator.js';
import MENU_CATEGORY from '../MenuCategory.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.date);
    InputValidator.validateDate(input);
    return Number(input);
  },

  async readOrders() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.orders);
    InputValidator.validateOrders(input);
    return input.split(',').map((order) => {
      const [menu, amount] = order.split('-');
      return {
        menu,
        amount: Number(amount),
        category: MENU_CATEGORY.getCategory(menu),
      };
    });
  },
};

export default InputView;
