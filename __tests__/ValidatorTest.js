import { ERROR } from '../src/constants';
import Validator from '../src/Validator/Validator';

describe('Validator 테스트', () => {
  test.each([['32'], ['a']])('날짜 입력 예외 테스트 (date: %s)', input => {
    expect(() => {
      Validator.validateDate(input);
    }).toThrow(ERROR.invalidDate);
  });

  test.each([
    ['양송이수프-3,크리스마스파스타-2,아이스크림-1샴페인-1'],
    ['양송이수프-3,로제파스타-2,아이스크림-1,샴페인-1'],
    ['양송이수프-3,양송이수프-2,아이스크림-1,샴페인-1'],
    ['양송이수프-3,크리스마스파스타-2,아이스크림-1,샴페인-0'],
  ])('주문 입력 예외 테스트 (order: %s)', input => {
    expect(() => {
      Validator.validateOrder(input);
    }).toThrow(ERROR.invalidOrder);
  });

  test('주문 입력 예외 테스', () => {
    const input = '양송이수프-5,크리스마스파스타-6,아이스크림-5,샴페인-5';

    expect(() => {
      Validator.validateOrder(input);
    }).toThrow(ERROR.maxOrderQuantity);
  });

  test('주문 입력 예외 테스', () => {
    const input = '샴페인-5';

    expect(() => {
      Validator.validateOrder(input);
    }).toThrow(ERROR.noDrinkOrderOnly);
  });
});
