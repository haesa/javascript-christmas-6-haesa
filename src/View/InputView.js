import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/index.js';
import Validator from '../Validator/Validator.js';
import getCategory from '../utils/category.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.date);
    Validator.validateDate(input);
    return Number(input);
  },

  async readOrder() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.order);
    Validator.validateOrder(input);
    return input.split(',').map(order => {
      const [menu, quantity] = order.split('-');
      return { menu, quantity, category: getCategory(menu) };
    });
  },
};

export default InputView;
