import { INPUT_MESSAGE } from '../constants';
import InputValidator from '../Validator/InputValidator';

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
      const orderArr = order.split('-');
      return { menu: orderArr[0], amount: Number(orderArr[1]) };
    });
  },
};

export default InputView;
